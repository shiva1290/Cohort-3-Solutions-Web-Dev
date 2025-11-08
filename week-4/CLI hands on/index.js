const fs = require("fs");
const { Command } = require("commander");

const program = new Command();

program
  .name("counter")
  .description("CLI to do file based tasks")
  .version("0.8.0");

program
  .command("count") // name of command to call
  .description("Count the number of lines in a file") // description of what it does
  .argument("<file>", "file to count") // what arguments it expects
  .action((file) => {
    // the action this command should perform
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.log(err); // if not found console log the error
      } else {
        const countWords = (data) => {
          let total = 0;
          for (let i = 0; i < data.length; i++) {
            if (data[i] === " ") {
              total++;
            }
          }
          console.log(`There are ${total + 1} words in ${file}`); // print the number of times space character was found
        };
        countWords(data);
      }
    });
  });
program.parse();
