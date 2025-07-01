## Encoding:
- utf8
- utf16
- ascii
- iso-8859-1

## Buffer
- Buffer.bytes(): byte[]
- Buffer.text(encoding = "utf8"): java.lang.String
- Buffer.size(): java.lang.Integer

## Sync methods
- readFileSync(path): Buffer
- readFileSync(path, encoding): java.lang.String
- appendFileSync(path, data)
- writeFileSync(path, data)
- unlinkSync(path)
- renameSync(oldPath, newPath)
- isFileSync(path)
- isDirSync(path)
