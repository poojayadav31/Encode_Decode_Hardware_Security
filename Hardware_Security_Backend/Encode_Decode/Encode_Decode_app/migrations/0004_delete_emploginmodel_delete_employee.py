# Generated by Django 5.0.6 on 2024-06-06 10:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Encode_Decode_app', '0003_alter_empregistration_phonenumber'),
    ]

    operations = [
        migrations.DeleteModel(
            name='EmpLoginModel',
        ),
        migrations.DeleteModel(
            name='Employee',
        ),
    ]