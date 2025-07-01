let CompletableFuture = java.util.concurrent.CompletableFuture;

let fs = module.require("./sync");

function readFile(path, encoding, callback) {
    CompletableFuture.runAsync(() => {
        try {
            let res = fs.readFileSync(path, encoding);
            callback(res);
        } catch (e) {
            callback(e);
        }
    });
}

function appendFile(path, data, callback) {
    CompletableFuture.runAsync(() => {
        try {
            fs.appendFileSync(path, data);
            callback();
        } catch (e) {
            callback(e);
        }
    });
}

function writeFile(path, data, callback) {
    CompletableFuture.runAsync(() => {
        try {
            fs.writeFileSync(path, data);
            callback();
        } catch (e) {
            callback(e);
        }
    });
}

function unlink(path, callback) {
    CompletableFuture.runAsync(() => {
        try {
            let res = fs.unlinkSync(path);
            callback(res);
        } catch (e) {
            callback(e);
        }
    });
}

function rename(oldPath, newPath, callback) {
    CompletableFuture.runAsync(() => {
        try {
            fs.renameSync(oldPath, newPath);
            callback();
        } catch (e) {
            callback(e);
        }
    });
}

function readdir(path, callback) {
    CompletableFuture.runAsync(() => {
        try {
            let res = fs.readDirSync(path);
            callback(res);
        } catch (e) {
            callback(e);
        }
    });
}

function mkdir(path) {
    CompletableFuture.runAsync(() => {
        try {
            let res = fs.mkdirSync(path);
            callback(res);
        } catch (e) {
            callback(e);
        }
    });
}

function exists(path) {
    CompletableFuture.runAsync(() => {
        try {
            let res = fs.existsSync(path);
            callback(res);
        } catch (e) {
            callback(e);
        }
    });
}

function isDir(path) {
    CompletableFuture.runAsync(() => {
        try {
            let res = fs.isDirSync(path);
            callback(res);
        } catch (e) {
            callback(e);
        }
    });
}

function isFile(path) {
    CompletableFuture.runAsync(() => {
        try {
            let res = fs.isFileSync(path);
            callback(res);
        } catch (e) {
            callback(e);
        }
    });
}

module.exports = {
    readFile,
    appendFile,
    writeFile,
    unlink,
    rename,
    readdir,
    mkdir,
    exists,
    isDir,
    isFile,
};
