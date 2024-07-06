// create a laderpatter

let n = 6;

for (let i = 1; i <= n; i++) {
  if (i == 1 || i == 3 || i == 5) {
    console.log("*\n");
  }

  let star = "";
  for (let j = 0; j < i; j++) {
    star += "*";
    console.log(star);
  }

  console.log("\n");
}
