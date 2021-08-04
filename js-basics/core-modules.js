/**
 * Reference: https://nodejs.org/dist/latest-v16.x/docs/api/
 * Core modules are part of nodejs runtime like standard library of other languages
 * 
 */

import * as fs from 'fs/promises';

/**
 * Ex.1 
 * File System module
 */

// list content of the dir
async function listFiles() {
    try {
        const files = await fs.readdir('./');
        for (const f of files) {
            console.log(f);
        }
    }
    catch(err) {
        console.error(err);
    }

}
// listFiles();

// read file using new fs/promises
async function readFile() {
    let filehandle;
    try {
        filehandle = await fs.open('README.md', 'r');
        const content = await filehandle.readFile({
            encoding: 'utf-8'
        });
        console.log(content);
    }
    catch(err) {
        console.error(err);
    }
    finally {
        filehandle?.close();
        console.log("[INFO] file closed")
    }

}

// readFile();

// write file using new fs/promises
async function writeFile() {
    let filehandle;
    try {
        filehandle = await fs.open('README.md', 'r+');
        const content = await filehandle.writeFile("Hello from core modules");
        // const content = await filehandle.appendFile("Hello from core modules");
        console.log(content);
    }
    catch(err) {
        console.error(err);
    }
    finally {
        filehandle?.close();
        console.log("[INFO] file closed")
    }

}

// writeFile();


