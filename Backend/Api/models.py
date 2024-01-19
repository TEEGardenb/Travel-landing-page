from django.db import models
from datetime import date

from django.db.models.signals import pre_save
from django.dispatch import receiver

# Create your models here.


class Destino(models.Model):
    pais = models.CharField(max_length=10)
    ciudad = models.CharField(max_length=10)
    precio_original = models.DecimalField(
        max_digits=10, decimal_places=2, default=0)
    rating = models.IntegerField(default=5)
    descuento = models.BooleanField(default=False)
    precio_con_descuento = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True)
    description = models.TextField(blank=True)
    fecha_publicacion = models.DateField(default=date.today)

    def __str__(self) -> str:
        return self.pais


class User(models.Model):
    username = models.CharField(max_length=10)
    email = models.EmailField()
    destino = models.ForeignKey(
        Destino, on_delete=models.SET_NULL, blank=True, null=True)

    def __str__(self) -> str:
        return self.username
