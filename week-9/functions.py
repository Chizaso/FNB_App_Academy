def greet(name):
    print(f"Hello, {name}")
    
    
greet("Alice")

def add(a, b):
    return a + b

result = add(90, 10)
print(result)

def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)
    
factorial(10)