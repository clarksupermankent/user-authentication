# Function to calculate factorial
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

# Input from user
number = int(input("Enter a number to calculate its factorial: "))

# Calculate and print the result
result = factorial(number)
print(f"The factorial of {number} is {result}")
