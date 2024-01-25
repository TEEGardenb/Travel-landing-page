from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet
from .models import Destino
from .models import Suscriptor
from .serializers import DestinoSerializer

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ValidationError

# Create your views here.


class DestinoListCreateView(ModelViewSet):
    queryset = Destino.objects.all()
    serializer_class = DestinoSerializer


@csrf_exempt
def suscripcion_view(request):
    if request.method == 'POST':
        email = request.POST.get('email')

        try:
            # Valida y crea un nuevo Suscriptor
            suscriptor = Suscriptor(email=email)
            suscriptor.full_clean()
            suscriptor.save()

            return JsonResponse({'message': '¡Suscripción exitosa!'})
        except ValidationError as e:
            return JsonResponse({'error': e.message}, status=400)

    return JsonResponse({'error': 'Método no permitido'}, status=405)
