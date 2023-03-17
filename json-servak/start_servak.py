import sys,os

cmd = 'json-server --watch ./db.json --routes ./routes.json --port=1000'
if len(sys.argv) > 1:
    if sys.argv[1] == '--auth':
        cmd += ' --auth'

print(cmd)
os.system(cmd)