# Generated by Django 5.0.1 on 2024-01-22 01:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0012_rename_precio_destino_precio_original_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Suscriptor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254, unique=True)),
            ],
        ),
    ]
