from rest_framework import serializers
from .models import *
# from .models import Registration, ContactMessage

# class EmpRegSerializer(serializers.ModelSerializer):
#     class Meta:
#         model= Registration
#         fields=["Username","email","password","dob","phoneNumber"]


class EmpRegSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}

class OTPVerifySerializer(serializers.Serializer):
    email = serializers.EmailField()
    otp = serializers.CharField(max_length=6)

class OTPSendSerializer(serializers.Serializer):
   class Meta:
        model= OTPverify
        fields='__all__'

class EmpLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model= Registration
        fields=['email','password']


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['name', 'email', 'number', 'message']

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'
