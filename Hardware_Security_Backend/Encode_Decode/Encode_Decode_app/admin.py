from django.contrib import admin
# from Encode_Decode_app.models import EmpLoginModel
from .models import *

# class  LoginAdmin(admin.ModelAdmin):
#     list_display = ('id','password')
# admin.site.register(EmpLoginModel,LoginAdmin)

admin.site.register(Registration)
admin.site.register(ContactMessage)
admin.site.register(Base64History)
admin.site.register(AESHistory)
