from rest_framework import viewsets
from .serializers import BancosSerializers
from ..models import bancos


class BancosViewsets(viewsets.ModelViewSet):
 serializer_class = BancosSerializers
 queryset = bancos.objects.all()
 filter_fields= ('codigo_id',)