inp = "a"

while not inp.isdigit():
    inp = input("Enter a number: ")

rows = int(inp)


def print_row(i):
    print(" " * (rows - i - 1), end="")
    print("*" * (2 * i + 1))


for i in range(rows):
    print_row(i)

for i in range(rows - 2, -1, -1):
    print_row(i)
