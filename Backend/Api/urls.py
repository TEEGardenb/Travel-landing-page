from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import DestinoListCreateView

router_Destino = DefaultRouter()

router_Destino.register(prefix='post', basename='post',
                        viewset=DestinoListCreateView)
