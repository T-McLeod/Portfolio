from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    link = models.URLField(max_length=200)

    def __str__(self):
        return self.title

class Post(models.Model):
    title = models.CharField(max_length=100)
    message = models.TextField()
    link = models.URLField(max_length=200)
    image = models.URLField(max_length=200, blank=True, null=True)

    def __str__(self):
        return self.title
