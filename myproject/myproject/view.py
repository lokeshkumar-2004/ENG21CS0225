fromdjango.http import HttpResponse
import os
import time
import subprocess

def htop_view(request):
    name = "lokes kumar"
    username=os.getlogin()
    server_time=time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())
    top_output = subprocess.getoutput('top -n 1 -b')
    response = f"Name: {name}<br>Username: {username}<br>Server Time:{server_time} IST<br><pre>{top_output}</pre>"
    return Httpresponse(response)