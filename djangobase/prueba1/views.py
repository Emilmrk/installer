from django.shortcuts import render
from rest_framework import generics
from .models import Prueba
from .serializers import PruebaSerializer

class PruebaList(generics.ListCreateAPIView):
    queryset = Prueba.objects.all()
    serializer_class = PruebaSerializer

class PruebaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Prueba.objects.all()
    serializer_class = PruebaSerializer
