# Generated by Django 5.0.6 on 2024-07-08 08:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Encode_Decode_app', '0009_alter_contactmessage_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='empregistration',
            name='is_verified',
            field=models.BooleanField(blank=True, default=False),
        ),
        migrations.AddField(
            model_name='empregistration',
            name='otp',
            field=models.CharField(blank=True, max_length=6),
        ),
    ]
