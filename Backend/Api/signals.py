from django.db.models.signals import pre_save
from django.dispatch import receiver
from .models import Destino

# se importa decimal para asegurar que se trabaje solo con decimales
from decimal import Decimal

# Logica del porcentaje de descuento


@receiver(pre_save, sender=Destino)
def aplicar_descuento(sender, instance, **kwargs):
    if instance.descuento:
        if not isinstance(instance.precio_original, Decimal):
            instance.precio_original = Decimal(instance.precio_original)
        # Aplicar descuento
        descuento_porcentaje = Decimal(10)
        descuento = (descuento_porcentaje / Decimal(100)) * \
            instance.precio_original
        instance.precio_con_descuento = instance.precio_original - descuento
    else:
        instance.precio_con_descuento = None
