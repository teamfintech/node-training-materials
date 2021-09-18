const fs = require('fs').promises;
const path = require('path');
const { query } = require('../db');


async function lsDir(dir) {
    const files = [];
    const absPath = path.join(__dirname, dir);
    async function* generator(dirName) {
        const dirents = await fs.readdir(dirName, { withFileTypes: true });
        for (dirent of dirents) {
            let direntPath = path.resolve(dirName, dirent.name);
            if (dirent.isDirectory()) yield* generator(direntPath);
            else yield direntPath;
        }

    }
    for await (filePath of generator(absPath)) files.push(filePath);
    return files;
}


async function dbSync(dir) {
    const files = await lsDir('../tables');
    for(f of files) {
        const sql = (await fs.readFile(f)).toString();
        await query(sql);
    }
}


module.exports = {
    dbSync
}


