from django.urls import path, include
from rest_framework import routers
from .views import ProductoView
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
#api versioning

router = routers.DefaultRouter()
router.register(r'productos', ProductoView, 'productos')
urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui')
]
#esto genera GET, POST, PUT, DELETE