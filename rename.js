// The built-in Node.js file system (fs) module helps us store, access, and manage data on our operating system.
const fs = require('fs');


// 1) Rename a specific word in multiple files in the same folder.
function specificWordInMultipleFiles() {
    const path = 'C:/Users/username/desktop/folder'; /* Absolute path of the files you want to rename */
    const initWord = 'old'; /* Words you want to rename => In the example the files contain the word "old" */
    const newWord = 'new'; /* New word that replaces the old ones */
    const dirFiles = fs.readdirSync(path);
    const acceptedFiles = dirFiles.filter(files => files.includes(initWord))
    dirFiles.forEach(file => {
        if (acceptedFiles.includes(file)) {
            const initialFile = path + '/' + file;
            const newFile = path + '/' + file.replace(initWord, newWord);
            if (initialFile !== newFile) {
                fs.rename(initialFile, newFile, function (err) {
                    if (err) throw err;
                    console.log(`\x1b[32m[Renowned] => \x1b[37m${file} \x1b[32mto \x1b[37m${file.replace(initWord, newWord)}`);
                });
            } else {
                console.log(`\x1b[33m[Warning] => \x1b[37mThe file \x1b[36m${file} \x1b[37malready contains the word \x1b[36m${newWord}`);
            }
        } else {
            console.log(`\x1b[31m[Error] => \x1b[37mThe selected word \x1b[36m${initWord} \x1b[37mdoes not exist in file \x1b[36m${file}`);
        }
    })
}


// 2) Rename a specific word in a single file
function specificWordInSingleFile() {
    const path = 'C:/Users/username/desktop/folder'; /* Absolute path of the file you want to rename */
    const selectedFile = 'new-file.txt'; /* Name of the file you want to rename */
    const initWord = 'new'; /* Word you want to rename */
    const newWord = 'final'; /* New word that replaces the old one */
    const allFiles = [];
    fs.readdirSync(path).forEach(file => { allFiles.push(file) })
    if (allFiles.includes(selectedFile)) {
        fs.readdirSync(path).forEach(file => {
            if (file.includes(selectedFile)) {
                const initialFile = path + '/' + file;
                const newFile = path + '/' + file.replace(initWord, newWord);
                if (initialFile !== newFile) {
                    fs.rename(initialFile, newFile, function (err) {
                        if (err) throw err;
                        console.log(`\x1b[32m[Renowned] => \x1b[37m${file} \x1b[32mto \x1b[37m${file.replace(initWord, newWord)}`);
                    });
                } else {
                    console.log(`\x1b[33m[Warning] => \x1b[37mThe file \x1b[36m${file} have the same name`);
                }
            }
        });
    } else {
        console.log(`\x1b[31m[Error] => \x1b[37mThe selected file \x1b[36m${selectedFile} does not exist`);
    }
}


// 3) Rename the entire file
function renameCompleteFile() {
    const initialFile = 'C:/Users/username/desktop/file.txt'; /* Initial name of the file you want to change */
    const newFile = 'C:/Users/username/desktop/new-file.txt'; /* New name of the file that replaces the old one */
    fs.renameSync(initialFile, newFile, function (err) {
        if (err) throw err;
        console.log(`\x1b[32m[File renamed] => \x1b[37m${initialFile} \x1b[32mto \x1b[37m${newFile}`);
    });
}


/*=>---------------------------------------------------[Functions invocation]---------------------------------------------------<=*/
// Decomment invocation depending on the one we need:

/* 1 */
// specificWordInMultipleFiles();

/* 2 */
// specificWordInSingleFile();

/* 3 */
// renameCompleteFile();

