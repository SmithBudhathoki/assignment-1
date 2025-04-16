const fs = require('fs');

fs.readFile('paragraph.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:\n');
    console.log(data);
});
