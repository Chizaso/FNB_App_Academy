"""
    Create a shopping cart program that will continuously ask the user for a food product the price that product.
    Have an exit clause if the user wishes to stop adding more things to their cart.
    At the end show the food items and total cost to the user.
"""

foods = []
prices = []
total = 0

while True:
    food = input("Enter a food to buy or press q to quit: ")
    if food.lower() == 'q':
        break
    else:
        price = float(input(f"Enter the price of the {food}: MK "))
        foods.append(food)
        prices.append(price)
print("----- Your Cart -----")
for food in foods:
    print(food)

for price in prices:
    total += price
print(f"The Total price is MK{total:.2f}\n")

print("Thank you for using our system..")
