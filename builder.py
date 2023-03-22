import os,re
os.sys

input_path = "build"
index_html_path = os.path.join(input_path,'index.html')
def convert():
    static_path = 'static/'
    static_path = '/'
    new_prefix = '{% static \''
    new_postfix = '\' %}'
    inp = ''
    with open(index_html_path, 'r') as f:
        inp = f.read()
    inp =inp.replace('static/','')
    html = '{% load static %}' + re.sub(rf'(src|href)="({static_path})(.*?)"', fr'\1="{new_prefix}\3{new_postfix}"', inp)

    with open(index_html_path,'w+') as f:
        f.write(html)

def movement():
    allfiles = os.listdir(input_path)
    print(allfiles)
    for f in allfiles:
        if not f in ['static','index.html']:
            print(f"From {os.path.join(input_path, f)} to {os.path.join(os.path.join(input_path,'static'),f)}")
            os.rename(os.path.join(input_path, f), os.path.join(os.path.join(input_path,'static'),f))

def getPath(dirs):
    t=''
    for f in dirs:
        t = os.path.join(t,f)
    return t
def movementBuild():
    static_path = getPath([input_path,'static'])
    tmp = getPath( ['..','backend','backend-smartshop','shop_app','templates','index.html'] )
    print(f'from {index_html_path} to {tmp}')
    tmp = getPath(['..','backend','backend-smartshop','static'])
    print(f'from {static_path} to { tmp }')

    #os.rename(index_html_path,getPath(['..','backend','backend','shop_app','templates','index.html']))
    #os.rename(static_path,getPath(['..','backend','backend','static']))
    
convert()
movement()
movementBuild()