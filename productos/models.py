from django.db import models

# Create your models here.
class Producto(models.Model):
    nombre = models.CharField(verbose_name='Nombre', max_length=100)
    precio = models.FloatField(verbose_name='Precio', max_length=32)
    existencias = models.IntegerField(verbose_name='Existencias')
    def __str__(self):
        return self.nombre