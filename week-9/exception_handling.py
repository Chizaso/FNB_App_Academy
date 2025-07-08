try:
    #x = 10
    print(x)
except NameError:
    print("Variable 'x' is not defined.")
else:
    print("Everything went wrong.")
    
    
x = 2
if x < 0:
    raise ValueError("x must be a positive number")