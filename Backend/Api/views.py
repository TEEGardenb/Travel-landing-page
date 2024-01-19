from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet
from .models import Destino
from .serializers import DestinoSerializer

# Create your views here.


class DestinoListCreateView(ModelViewSet):
    queryset = Destino.objects.all()
    serializer_class = DestinoSerializer
