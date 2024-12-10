from rest_framework import serializers
from .models import Prueba

class PruebaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prueba
        fields = '__all__'  # Incluir todos los campos del modelo

