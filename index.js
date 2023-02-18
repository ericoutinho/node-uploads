const express = require("express")
const multer = require("multer")
const storage = require("./multerConfig")

const upload = multer({storage: storage})
const app = express()

app.use("/files", express.static("uploads"))

app.post("/upload", upload.single("file"), (request, response) => {
    return response.json(request.file.filename)
})

app.listen(3000, () => {
    console.log("Server up in http://127.0.0.1:3000")
})