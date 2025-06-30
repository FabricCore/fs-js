let FabricLoader = net.fabricmc.loader.api.FabricLoader;
let StandardOpenOption = java.nio.file.StandardOpenOption;
let Files = java.nio.file.Files;

let FileUtils = org.apache.commons.io.FileUtils;

let { Buffer } = module.require("./buffer");

let root = FabricLoader.getInstance()
    .getConfigDir().resolve("jscore");

function readFileSync(path, encoding) {
    let bytes = Files.readAllBytes(root.resolve(path));
    let buffer = Buffer(bytes);

    if (encoding != undefined) {
        return buffer.text(encoding);
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
        StandardOpenOption.APPEND);
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
        StandardOpenOption.TRUNCATE_EXISTING);
}

function unlinkSync(path) {
    return FileUtils.deleteQuietly(root.resolve(path).toFile());
}

function renameSync(oldPath, newPath) {
    Files.move(root.resolve(oldPath), root.resolve(newPath));
}

function readdirSync(path) {
    return Files.list(root.resolve(path))
        .map(path => path.getFileName())
        .toList();
}

function mkdirSync(path) {
    return Files.createDirectories(root.resolve(path));
}

module.exports = {
    readFileSync,
    appendFileSync,
    writeFileSync,
    unlinkSync,
    renameSync,
    readdirSync,
    mkdirSync
}