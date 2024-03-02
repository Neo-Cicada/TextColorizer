// colorConsole.js

module.exports = {
    // Text colors
    red: (message) => {
      console.log('\x1b[31m%s\x1b[0m', message);
    },
    green: (message) => {
      console.log('\x1b[32m%s\x1b[0m', message);
    },
    blue: (message) => {
      console.log('\x1b[34m%s\x1b[0m', message);
    },
    // Background colors
    bgRed: (message) => {
      console.log('\x1b[41m%s\x1b[0m', message);
    },
    bgGreen: (message) => {
      console.log('\x1b[42m%s\x1b[0m', message);
    },
    bgBlue: (message) => {
      console.log('\x1b[44m%s\x1b[0m', message);
    },
    // Text styles
    bold: (message) => {
      console.log('\x1b[1m%s\x1b[0m', message);
    },
    underline: (message) => {
      console.log('\x1b[4m%s\x1b[0m', message);
    },
    // Reset text style
    reset: (message) => {
      console.log('\x1b[0m%s\x1b[0m', message);
    },
    shadow: (message) => {
        console.log('\x1b[90m%s\x1b[0m', message); // Shadow color
      },
    
    scroll: (message, speed = 100) => {
        let index = 0;
        const intervalId = setInterval(() => {
          process.stdout.write('\x1B[2K\x1B[0E'); // Clear the current line
          console.log(message.substring(index) + message.substring(0, index));
          index = (index + 1) % message.length;
        }, speed);
    
        // Stop the animation after 10 seconds (for demonstration purposes)
        setTimeout(() => {
          clearInterval(intervalId);
          process.stdout.write('\x1B[2K\x1B[0E'); // Clear the current line
        }, 10000);
      },
  };
  