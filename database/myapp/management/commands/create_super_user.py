# filepath: /c:/Users/mcleo/OneDrive/Documents/Personal_Projects/spike_tm419/database/myapp/management/commands/create_superuser.py
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

class Command(BaseCommand):
    help = 'Create a superuser'

    def handle(self, *args, **kwargs):
        username = 'tm419'
        email = 'tm419@duke.edu'
        password = 'adminpassword'

        if not User.objects.filter(username=username).exists():
            User.objects.create_superuser(username=username, email=email, password=password)
            self.stdout.write(self.style.SUCCESS(f'Successfully created superuser {username}'))
        else:
            self.stdout.write(self.style.WARNING(f'Superuser {username} already exists'))