let inp = "a";

while (isNaN(parseInt(inp))) {
  inp = prompt("Enter a number");
}

rows = parseInt(inp);

function print_row(i) {
  console.log(
    " ".repeat(rows - i - 1) + "*".repeat(2 * i + 1)
  );
}

for (let i = 0; i < rows; i++) print_row(i);
for (let i = rows - 2; i >= 0; i--) print_row(i);
