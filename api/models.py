from django.db import models

# Create your models here.
class bancos(models.Model):
    codigo_id= models.IntegerField(primary_key=True)
    nome_inst= models.CharField(max_length=500)