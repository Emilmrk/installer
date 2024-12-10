from django.urls import path
from .views import PruebaList, PruebaDetail

urlpatterns = [
    path('api/pruebas/', PruebaList.as_view(), name='prueba-list'),
    path('api/pruebas/<int:pk>/', PruebaDetail.as_view(), name='prueba-detail'),
]
