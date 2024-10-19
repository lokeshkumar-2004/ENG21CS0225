fromdjango.http import HttpResponse
import os
import time
import subprocess

def htop_view(request):
    name = "lokes kumar"
    username=os.getlogin()