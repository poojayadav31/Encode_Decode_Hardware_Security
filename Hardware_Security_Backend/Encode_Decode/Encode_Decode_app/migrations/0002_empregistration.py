# Generated by Django 5.0.6 on 2024-06-05 12:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Encode_Decode_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='EmpRegistration',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Username', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('password', models.CharField(max_length=100)),
                ('confirm_Password', models.CharField(max_length=100)),
                ('dob', models.DateField()),
                ('phoneNumber', models.IntegerField(max_length=10)),
            ],
        ),
    ]