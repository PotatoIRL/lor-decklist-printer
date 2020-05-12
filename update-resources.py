locale = 'en_us'

class urls:
    core_bundle_latest = 'https://dd.b.pvp.net/latest/core-{0}.zip'.format(locale)
    def set_bundle_latest(set_id): return 'https://dd.b.pvp.net/latest/set{1}-lite-{0}.zip'.format(locale, set_id)

def fetch_zip(url):
    print('Fetching {0}'.format(url))
    import urllib.request
    import zipfile
    filehandle, _ = urllib.request.urlretrieve(url)
    return zipfile.ZipFile(filehandle, 'r')

def write(path, data, mode = 'wb'):
    out = open(path, mode)
    out.write(data)
    out.close()
    
def fetch_globals_json():
    core_bundle_latest_zip = fetch_zip(urls.core_bundle_latest)
    globals_json = core_bundle_latest_zip.open('{0}/data/globals-{0}.json'.format(locale))
    write('data/globals.json', globals_json.read())

def fetch_sets_json(set_id):
    set_zip = fetch_zip(urls.set_bundle_latest(set_id))
    set_json = set_zip.open('{0}/data/set{1}-{0}.json'.format(locale, set_id))
    write('data/set{0}.json'.format(set_id), set_json.read())
        
fetch_globals_json()
list(map(fetch_sets_json, [1, 2]))
