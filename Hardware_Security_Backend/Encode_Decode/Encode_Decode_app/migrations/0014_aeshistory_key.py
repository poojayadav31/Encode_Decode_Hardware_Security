# Generated by Django 5.0.6 on 2024-08-07 08:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("Encode_Decode_app", "0013_feedback_aeshistory_base64history"),
    ]

    operations = [
        migrations.AddField(
            model_name="aeshistory",
            name="key",
            field=models.CharField(max_length=500, null=True),
        ),
    ]
