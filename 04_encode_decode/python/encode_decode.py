original_string = "Hvordan encoder man en string"
  
encoded_string = original_string.encode('utf-8') 
print('The encoded string is :') 
print(encoded_string) 
  
decoded_string = encoded_string.decode('utf-8') 
print('The decoded string is :') 
print(decoded_string) 