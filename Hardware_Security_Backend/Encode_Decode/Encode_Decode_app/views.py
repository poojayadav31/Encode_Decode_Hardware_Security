from django.shortcuts import render
from Encode_Decode_app.models import *
from Encode_Decode_app.Serializers import *
from rest_framework.decorators import api_view
from django.db.models import Q
from rest_framework.response import Response
from rest_framework import status
from .encrypt import AES_encrypt
from .decrypt import AES_decrypt
from .base64_script import base64_encryption, base64_decryption
from django.contrib.auth.hashers import make_password, check_password
import random

#function made to register the user and save the information in the database
import pdb
@api_view(["POST"])
def RegistrationView(request):
     # pdb.set_trace()
    # print("lllllllll")
    serializer = EmpRegSerializer(data=request.data)
    if serializer.is_valid():
        # Hash the password before saving
        hashed_password = make_password(request.data['password'])
        serializer.save(password=hashed_password)
        return Response({"success": "Created successfully"})
    print(serializer.data)
    return Response(serializer.errors)

#function made to check the email and password used at the time of signup and match them the do login
@api_view(["POST"])
def Loginview(request):
    try:
        # Find the user by email
        emp = Registration.objects.get(email=request.data.get('email'))
        # Check if the provided password matches the hashed password
        if check_password(request.data.get('password'), emp.password):

            return Response({"success": "Login successfully",'name':emp.Username,'user_id':emp.id}, status=201)
        else:
            return Response({"error": "Invalid password"}, status=400)
    except Registration.DoesNotExist:
        return Response({"error": "Invalid email"}, status=400)

#function made to sent the otp in user email address
import pdb
@api_view(["POST"])
def send_otp(request):
    # pdb.set_trace()
       otp = random.randint(100000, 999999)
       email=request.data.get('email')
       if otp and email:

            OTPverify.objects.create(otp=otp,email=email)
            subject = 'Your OTP for Registration'
            # plain_message = f"{'Your OTP'} :  {otp}"
            plain_message = f"Dear User,\n\nThank you for registering with our Encode Decode website. To complete your signup process, please use the following One-Time Password (OTP) to verify your email address:\n\nYour OTP is: {otp}\n\nPlease enter this OTP on the verification page to complete your registration. This OTP is valid for the next 15 minutes.\n\nIf you did not initiate this request, please ignore this email or contact our support team immediately.\n\nThank you for choosing our services.\n\nBest regards,\nThe Encode Decode Team\nwww.encodedecodesecurity.com\nsupport@encode-decode.com"
            from_email = 'poojayadav19.pc@gmail.com'  # Replace with your email address
            to_email = email
            send_mail(subject, plain_message, from_email, [to_email])
            return Response({"success": "OTP send successfully"}, status=201)
       return Response({'error':'email is required'})

#function made to check the otp sent in user email address
import pdb
@api_view(["POST"])
def verify_otp(request):
    # pdb.set_trace()
    if request.data.get('otp') and request.data.get('email'):
        vaification=OTPverify.objects.filter(email=request.data.get('email'),otp=request.data.get('otp')).exists()
        if vaification:
            return Response({"success": "OTP verified successfully"}, status=201)
  
        else:
            return Response({"error": "Invalid OTP"}, status=400)
    else:
        return Response({"error": "Email or Otp Required"}, status=400)


@api_view(["POST"])
def send_forgot_password_otp(request):
    otp = random.randint(100000, 999999)
    email = request.data.get('email')
    if email:
        OTPverify.objects.create(otp=otp, email=email)
        
        subject = 'Your OTP for Password Reset'
        plain_message = f"Dear User,\n\nWe received a request to reset your password for your account on the Encode Decode website. Please use the following One-Time Password (OTP) to reset your password:\n\nYour OTP is: {otp}\n\nPlease enter this OTP on the password reset page to proceed. This OTP is valid for the next 15 minutes.\n\nIf you did not initiate this request, please ignore this email or contact our support team immediately.\n\nThank you for using our services.\n\nBest regards,\nThe Encode Decode Team\nwww.encodedecodesecurity.com\nsupport@encode-decode.com"
        
        from_email = 'poojayadav19.pc@gmail.com'  # Replace with your email address
        to_email = email
        
        try:
            send_mail(subject, plain_message, from_email, [to_email])
            return Response({"success": "OTP sent successfully"}, status=201)
        except Exception as e:
            return Response({'error': 'Failed to send email', 'details': str(e)}, status=500)
    return Response({'error': 'Email is required'}, status=400)

#function made to encode the plaintext in AES
@api_view(['POST'])
def encryption(request):
    # import pdb
    # pdb.set_trace()
    plain_text = request.data['plain_text']
    cipher = request.data['key']
    res = AES_encrypt(plain_text, cipher)
    AESHistory.objects.create(
        user_id=Registration.objects.get(id=request.data.get('user_id')),
        encode=plain_text,
        flag = "Encryption",
        key = cipher,
        decode=res['success']
    
    )
    return Response(res)

#function made to decode the encrypted text in AES
@api_view(['POST'])
def decryption(request):
    # import pdb
    # pdb.set_trace()
    encrypted_text = request.data['encrypted_text']
    cipher = request.data['key']
    res = AES_decrypt(encrypted_text, cipher)
    AESHistory.objects.create(
        user_id=Registration.objects.get(id=request.data.get('user_id')),
        encode=res['success'],
        flag = "Decryption",
        key = cipher,
        decode=encrypted_text
    
    )
    return Response(res)

@api_view(['POST'])
def decryption_get(request):
    res=AESHistory.objects.filter(user_id=request.data.get('user_id')).values()
    return Response(res)

#function made encode the plaintext in base64
@api_view(['POST'])
def encoded_text(request):
    # import pdb
    # pdb.set_trace()
    print(request)
    text = request.data['text']
    res = base64_encryption(text)
    Base64History.objects.create(
        user_id=Registration.objects.get(id=request.data.get('user_id')),
        encode=text,
        decode=res,
        search='encode'
    )
    print(res)
    return Response(res)

#function made to decode the encrypted text in base64
@api_view(['POST'])
def decoded_text(request):
    # import pdb
    # pdb.set_trace()
    encrypted_text = request.data['Encrypted_text']
    res = base64_decryption(encrypted_text)
    Base64History.objects.create(
        user_id=Registration.objects.get(id=request.data.get('user_id')),
        encode=res,
        decode=encrypted_text,
        search='decode'
    
    )
    return Response(res)

@api_view(['POST'])
def decoded_get(request):
    res=Base64History.objects.filter(user_id=request.data.get('user_id')).values()
    return Response(res)

#function made to save contact messages
@api_view(['POST'])
def contact_message_view(request):
    print(request.data, "sdd")
    serializer = ContactMessageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'success': 'Your message has been sent successfully!', 'data': serializer.data}, status=status.HTTP_201_CREATED)
    print(serializer.errors)
    return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['DELETE'])
def delete_encode(request,id):
    base64=Base64History.objects.get(id=id)
    base64.delete()
    return Response({'msg':'done'})

@api_view(['DELETE'])
def delete_AES_encode(request,id):
    AES=AESHistory.objects.get(id=id)
    AES.delete()
    return Response({'msg':'done'})





