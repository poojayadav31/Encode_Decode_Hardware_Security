from django.db import models
import random
import string
from django.core.mail import send_mail
# from django.cortrib.auth.models import User

# Create your models here.



class Registration(models.Model):
    Username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    dob = models.DateField()
    phoneNumber = models.IntegerField(unique=True)

    def __str__(self):
        return self.Username

class OTPverify(models.Model):
    email = models.EmailField(unique=True)
    otp = models.CharField(max_length=6, blank=True)

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    number = models.CharField(max_length=10)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Feedback(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Base64History(models.Model):
    MY_CHOICES = [
        ('decode', 'decode'),
        ('encode', 'encode'),
    ]
   
    encode = models.CharField(max_length=500)
    decode = models.CharField(max_length=500)
    user_id = models.ForeignKey(Registration,on_delete=models.CASCADE)
    search = models.CharField(
        max_length=100,
        choices=MY_CHOICES,
        blank=True
    )

    def __str__(self):
        return f"{self.user_id} - {self.encode} - {self.decode} - {self.search}"

class AESHistory(models.Model):
    encode = models.CharField(max_length=500)
    key = models.CharField(max_length=500,null=True)
    decode = models.CharField(max_length=500)
    user_id = models.ForeignKey(Registration,on_delete=models.CASCADE)
    flag = models.CharField(max_length=20, null=True)

    def __str__(self):
        return f"{self.user_id} - {self.encode} - {self.decode}  - {self.flag}"

