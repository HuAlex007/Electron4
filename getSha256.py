from hashlib import sha512
from base64  import b64encode
f = open('F:\GitCode\Electron4\dist\Electron4.Setup.1.0.18.exe', 'rb')
bytes = f.read()
hashInBinary = sha512(bytes).digest()
print(b64encode(hashInBinary).decode('utf-8'))
# 3qSVIfEFx5SMljO5BxSJspwDJK0h0DWB5oBnMn8WCTbDroFWNAZNxkmObuPaRmMJjesrmrC71N1AbDVdnNak5Q==
f.close()