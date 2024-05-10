## Elden Ring Bingo Board Generator

### Configuration

Everything you need for configuring your board generator is in the **config.js** file in the **/src** directory.

- To select how many of each game stage _(early, mid, or late)_ squares you want in your board, simply edit the respective "**count**" constants of each game stage shown below.

      export const earlyCount = 10;
      export const midCount = 10;
      export const lateCount = 5;

> Remember, each board must add up to a total of **25** squares!

- To edit the squares themselves, work inside the respective arrays shown below:

      export const early = [...]
      export const mid = [...]
      export const late = [...]

Remove what you want removed, and follow this specific convention `{ name: "Square description here!" },` to add squares.

### Generate

To generate a bingo board, simple double click the `generate.bat` batch file, and the board will be automatically generated and copied to your clipboard! Simply paste the content into a new "Game: Custom (Advanced)" room in the "Board" section on [bingosync.com](https://bingosync.com/) and enjoy!
