## Text Colorizer

### Description
Text Colorizer is a lightweight npm package that provides various functionalities to enhance console output in Node.js applications. With ColorConsole, you can easily add colors, styles, shadows, and even simple text animations to your console logs.

### Installation:

``` bash
npm i consoletextcolorizer
```
### Usage

Text Colors:

Text Colorizer provides functions to print text in different colors. Here's how to use them:
```javascript
const colorConsole = require('color-console');

colorConsole.red('This is red text');
colorConsole.green('This is green text');
colorConsole.blue('This is blue text');
```
### Background Colors:

#### You can also set background colors for the text:
```javascript

colorConsole.bgRed('This has a red background');
colorConsole.bgGreen('This has a green background');
colorConsole.bgBlue('This has a blue background');
```
### Text Styles:

#### Text Colorizer supports various text styles such as bold and underline:

```javascript
colorConsole.bold('This is bold text');
colorConsole.underline('This is underlined text');
```
### Shadow Effect:

#### You can add a shadow effect to the text using the shadow function:
```javascript
colorConsole.shadow('This text has a shadow');
```
### Text Animation:

#### Text Colorizer allows you to create simple text animations, like scrolling text:
```javascript
colorConsole.scroll('This is scrolling text!', 100);
```
### API:

- red(message)
- green(message)
- blue(message)
- bgRed(message)
- bgGreen(message)
- bgBlue(message)
- bold(message)
- underline(message)
- reset(message)
- shadow(message)
- scroll(message, speed)

### Contributing:

#### Contributions are welcome! If you'd like to contribute to ColorConsole, please fork the repository and create a pull request.

### License:

#### This project is licensed under the MIT License. See the LICENSE file for details.
