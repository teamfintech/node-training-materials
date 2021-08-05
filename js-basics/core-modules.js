/**
 * Reference: https://nodejs.org/dist/latest-v16.x/docs/api/
 * Core modules are part of nodejs runtime like standard library of other languages
 * 
 */

import * as fs from 'fs/promises';
import path from 'path';
import os from 'os';


/**
 * Ex.1 
 * File System module
 */

// list content of the dir
async function listFiles() {
    try {
        const files = await fs.readdir('./');
        // console.log(files);
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
    let files;
    try {
        files = await fs.open('README.md', 'r');
        const content = await files.readFile({
            encoding: 'utf-8'
        });
        console.log(content);
    }
    catch(err) {
        console.error(err);
    }
    finally {
        files?.close();
        console.log("[INFO] file closed")
    }

}

// readFile();

// write file using new fs/promises
async function writeFile() {
    let filehandle;
    try {
        filehandle = await fs.open('README.md', 'a');
        // const content = await filehandle.writeFile("Hello from core modules!!!");
        const content = await filehandle.appendFile("Hello from core modules");
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


/**
 * Ex.2
 * Path module
 */

// read folders in PATH
function envPaths() {
    const paths = process.env.PATH.split(path.delimiter);
    console.log(paths);
}

// envPaths();

async function pathJoins() {
    console.log(process.cwd());
    const dirname = process.cwd();
    const gitpath = path.join(dirname, '../.gitignore');
    console.log(gitpath);
    const content = await fs.readFile(gitpath, {encoding: 'utf-8'});
    console.log(content);
}
// pathJoins();


/**
 * Ex.3
 * OS module
 */

function numOfCpus() {
    console.log(os.cpus().length);
}

// numOfCpus();

// network addresses
function netAddrs() {
    const interfaces = os.networkInterfaces()
    console.log(interfaces);
    interfaces['Wi-Fi'].forEach(i => {
        console.log(i.address)
    });
}
// netAddrs();
