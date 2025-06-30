let StandardCharsets = java.nio.charset.StandardCharsets;

function fromEncoding(encoding) {
    if (encoding instanceof java.lang.String) {
        encoding = '' + encoding;
    }

    if (typeof encoding != "string") {
        return encoding;
    }

    switch (encoding.toLowerCase()) {
        case "utf8":
        case "utf-8":
            return StandardCharsets.UTF_8;
        case "utf16":
        case "utf-16":
            return StandardCharsets.UTF_16;
        case "ascii":
            return StandardCharsets.US_ASCII;
        case "iso-8859-1":
            return StandardCharsets.ISO_8859_1;
        default:
            throw new Error(`Unknown encoding ${encoding}`);
    }
}

function Buffer(bytes) {
    return {
        _bytes: bytes,

        text(encoding = StandardCharsets.UTF_8) {
            return new java.lang.String(this._bytes, fromEncoding(encoding));
        },

        bytes() {
            return this.bytes;
        },

        size() {
            return this.bytes.length;
        },
    };
}

module.exports = {
    Buffer
};