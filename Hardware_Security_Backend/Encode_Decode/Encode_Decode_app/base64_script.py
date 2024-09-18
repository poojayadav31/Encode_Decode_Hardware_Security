import base64

def base64_encryption(text):
    text = text.encode()
    encoded_text = base64.b64encode(text)
    return encoded_text.decode()

def base64_decryption(encoded_text):
    decoded_text = base64.b64decode(encoded_text)
    return decoded_text.decode()