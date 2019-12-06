const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./dist/chrsolr'))
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '/dist/chrsolr/index.html')))
app.listen(process.env.PORT || 8080)
