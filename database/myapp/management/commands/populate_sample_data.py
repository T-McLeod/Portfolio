# filepath: myapp/management/commands/populate_sample_data.py
from django.core.management.base import BaseCommand
from myapp.models import Project, Post

class Command(BaseCommand):
    help = 'Populate the database with sample data'

    def handle(self, *args, **kwargs):
        # Create sample projects
        Project.objects.create(
            title='Doordash Tracker',
            description='Track offers given by doordash (from dasher perspective) and estimate the time required to complete trip. Intended to be used to calculate the most efficient offers to accept.',
            link='https://github.com/T-McLeod/DoordashTracker'
        )
        Project.objects.create(
            title='Chess Project',
            description='A Java app to play Chess locally on computer.',
            link='https://github.com/T-McLeod/ChessProject'
        )

        # Create sample posts
        Post.objects.create(
            title='Summer 2025: Internship at Capital One',
            message='I have recently accepted a summer internship at Capital One as a software engineer.',
            link='https://www.capitalonecareers.com/get-ahead-with-early-career-programs-for-students',
            image='http://tbcdn.talentbrew.com/company/234/gst_v1_0/img/logo-capital-one.svg'
        )
        Post.objects.create(
            title='Elected Vice President of Pi Kappa Alpha',
            message='I was elected as the Vice President of the Alpha Alpha chapter of Pi Kappa Alpha, or PIKE, for the upcoming school year.|https://example.com/blog-post',
            link='https://example.com/post2',
            image='http://upload.wikimedia.org/wikipedia/en/thumb/9/90/Pi_Kappa_Alpha_Coat_of_Arms.png/220px-Pi_Kappa_Alpha_Coat_of_Arms.png'
        )

        self.stdout.write(self.style.SUCCESS('Successfully populated sample data'))