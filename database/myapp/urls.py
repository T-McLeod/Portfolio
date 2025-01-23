from django.urls import path
from . import views

urlpatterns = [
    path('projects/', views.get_projects, name='get_projects'),
    path('posts/', views.get_posts, name='get_posts'),
]