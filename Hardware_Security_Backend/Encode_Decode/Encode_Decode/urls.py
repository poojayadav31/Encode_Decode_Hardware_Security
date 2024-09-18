"""
URL configuration for Encode_Decode project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from Encode_Decode_app.views import *
from Encode_Decode_app.views import encryption, decryption

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/Signup',RegistrationView),
    path('api/LoginPage',Loginview),
    path('api/verify-otp', verify_otp, name='verify-otp'),
    path('api/send-otp', send_otp, name='send-otp'),
    path('api/send-forgot-password-otp', send_forgot_password_otp, name='send_forgot_password_otp'),
    path('api/encrypt', encryption, name="encryption"),
    path('api/decrypt', decryption, name="decryption"),
    path('api/AESencrypt-get', decryption_get, name="AES_Encryption"),
    path('api/base64encode', encoded_text, name="base64encode"),
    path('api/base64encode-get', decoded_get, name="base64encode"),
    path('api/base64decode', decoded_text, name="base64decode"),
    path('api/contact', contact_message_view, name='contact_message'),
    path('api/delete/encode/<int:id>', delete_encode, name='delete_encode'),
    path('api/delete/Encrypt/<int:id>', delete_AES_encode, name='delete_AES_encode'),
    # path('api/Feedback',FeedbackViewSet, name='FeedbackViewSet'), 
]



