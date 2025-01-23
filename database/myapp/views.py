from django.shortcuts import render
from django.http import JsonResponse
from .models import Project, Post

def get_projects(request):
    projects = Project.objects.all().values()
    return JsonResponse(list(projects), safe=False)

def get_posts(request):
    posts = Post.objects.all().values()
    return JsonResponse(list(posts), safe=False)
