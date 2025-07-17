let FabricLoader = net.fabricmc.loader.api.FabricLoader;
let StandardOpenOption = java.nio.file.StandardOpenOption;
let Files = java.nio.file.Files;

let FileUtils = org.apache.commons.io.FileUtils;

let { Buffer } = module.require("./buffer");

let root = FabricLoader.getInstance().getConfigDir().resolve("jscore");

function readFileSync(path, encoding) {
    let bytes = Files.readAllBytes(root.resolve(path));
    let buffer = Buffer(bytes);

    if (encoding != undefined) {
        return buffer.text(encoding) + "";
    }

    return buffer;
}

function appendFileSync(path, data) {
    if (typeof data == "string") {
        data = new java.lang.String(data);
    }

    if (data instanceof java.lang.String) {
        data = data.getBytes();
    } else {
        data = new java.lang.String(data.toString()).getBytes();
    }

    Files.write(
        root.resolve(path),
        data,
        StandardOpenOption.APPEND,
        StandardOpenOption.CREATE,
    );
}

function writeFileSync(path, data) {
    if (typeof data == "string") {
        data = new java.lang.String(data);
    }

    if (data instanceof java.lang.String) {
        data = data.getBytes();
    }

    Files.write(
        root.resolve(path),
        data,
        StandardOpenOption.TRUNCATE_EXISTING,
        StandardOpenOption.CREATE,
    );
}

function unlinkSync(path, recursive = true) {
    if (!recursive) {
        Files.delete(root.resolve(path));
        return;
    }
    return FileUtils.deleteQuietly(root.resolve(path).toFile()) && true;
}

function renameSync(oldPath, newPath) {
    Files.move(root.resolve(oldPath), root.resolve(newPath));
}

function readdirSync(path) {
    return Array.from(
        Files.list(root.resolve(path))
            .map((path) => path.getFileName().toString())
            .toList(),
    );
}

function mkdirSync(path) {
    return Files.createDirectories(root.resolve(path)) && true;
}

function existsSync(path) {
    return Files.exists(root.resolve(path)) && true;
}

function isDirSync(path) {
    return Files.isDirectory(root.resolve(path)) && true;
}

function isFileSync(path) {
    return Files.isRegularFile(root.resolve(path)) && true;
}

function symlinkSync(target, path, _) {
    Files.createSymbolicLink(root.resolve(path), root.resolve(target));
}

module.exports = {
    readFileSync,
    appendFileSync,
    writeFileSync,
    unlinkSync,
    renameSync,
    readdirSync,
    mkdirSync,
    existsSync,
    isDirSync,
    isFileSync,
    symlinkSync,
};
