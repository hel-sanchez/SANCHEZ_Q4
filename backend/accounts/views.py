from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer, MyTokenObtainPairSerializer, UserSerializerWithToken
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import make_password
from rest_framework import status
from django.contrib.auth.models import User

import random
from django.core.mail import send_mail
from django.conf import settings
from .models import OTP
from django.contrib.auth import authenticate, login


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

# Create your views here.
@api_view(['GET'])
def get_user(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        otp_code = ''.join(random.choices('0123456789', k=6))

        user = User.objects.create(
            username=data.get('username'),
            email=data.get('email'),
            password=make_password(data.get('password')),
            is_active=False
        )

        OTP.objects.create(user=user, otp=otp_code)

        send_mail(
            'Your OTP for registration',
            f'Your OTP for registration is: {otp_code}',
            settings.EMAIL_HOST_USER,
            [user.email],
            fail_silently=False,
        )

        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)

    except:
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def verifyOTP(request):
    data = request.data
    otp_entered = data.get('otp')

    print("Received OTP verification request:", otp_entered)

    try:
        otp_instance = OTP.objects.get(otp=otp_entered)
    except OTP.DoesNotExist:
        print("Invalid OTP")
        return Response({'detail': 'Invalid OTP'}, status=status.HTTP_400_BAD_REQUEST)

    otp_instance.user.is_active = True
    otp_instance.user.save()

    username = otp_instance.user.username
    password = 'password_used_at_registration'
    user = authenticate(request, username=username, password=password)
    if user:
        login(request, user)

    print("OTP verified successfully and user activated")

    return Response({'detail': 'OTP verified successfully and user activated'})