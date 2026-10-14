const fs = require('fs');
console.log('1. Program started');
console.log('2. CLI input:', process.argv[2] || 'No input provided');
console.log('3. Before synchronous file operation');
fs.writeFileSync('sample.txt', 'File created successfully');
console.log('4. After synchronous file operation');
console.log('5. Before asynchronous file read');
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error reading file:', err.message);
        return;
    }
    console.log('7. Asynchronous file read:', data);
});
console.log('6. Program continues without waiting for file read');
console.log('8. Program reached the end');
