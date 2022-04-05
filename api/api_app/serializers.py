from rest_framework import serializers
from ..models import bancos

class BancosSerializers(serializers.ModelSerializer):
 class Meta:
  model = bancos
  fields = "__all__"
