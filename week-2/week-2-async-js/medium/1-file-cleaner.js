/*
## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

*/

const fs = require("fs/promises");
async function main() {
  try {
    let data = await fs.readFile("./hi.txt", "utf-8");
    console.log(data);

    let clean = data.replace(/\s+/g, " ");

    await fs.writeFile("./hi.txt", clean);
    console.log("Written data");

    let newData = await fs.readFile("./hi.txt", "utf-8");
    console.log(newData);
  } catch (err) {
    console.log(err);
  }
}
main();
