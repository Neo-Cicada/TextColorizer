# TextColorizer

Text Colorizer is a lightweight npm package that allows you to add color to your console output using ANSI escape codes.

Installation:

npm install textcolorizer

Usage:

const consolePalette = require('console-palette');

consolePalette.red('This is red text');
consolePalette.green('This is green text');
consolePalette.blue('This is blue text');

API:

Text Colors:
- red(message)
- green(message)
- blue(message)

Background Colors:
- bgRed(message)
- bgGreen(message)
- bgBlue(message)

Text Styles:
- bold(message)
- underline(message)

Reset Style:
- reset(message)

Contributing:

If you'd like to contribute to ConsolePalette, please fork the repository and create a pull request. Contributions, bug reports, and feature requests are welcome!

License:

This project is licensed under the MIT License - see the LICENSE file for details.
