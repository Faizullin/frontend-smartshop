import os,re,shutil


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
    html = '{% load static %}{% if MyDebug %}<script>window.baseApiUrl="http://localhost:8000";</script>{% endif %}' + re.sub(rf'(src|href)="({static_path})(.*?)"', fr'\1="{new_prefix}\3{new_postfix}"', inp)

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
    static_path_from = getPath(['build','static',])
    app_html_path_from = getPath( ['build','index.html'] )

    static_path_to = getPath(['..','backend','backend','shop_app','static'])
    app_html_path_to = getPath( ['..','backend','backend','shop_app','templates','app.html'] )


    if os.path.exists(app_html_path_to):
        os.remove(app_html_path_to)
    if os.path.exists(static_path_to):
        shutil.rmtree(static_path_to)

    os.rename(app_html_path_from,app_html_path_to)
    os.rename(static_path_from,static_path_to)
    
convert()
movement()
movementBuild()