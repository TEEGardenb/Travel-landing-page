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
