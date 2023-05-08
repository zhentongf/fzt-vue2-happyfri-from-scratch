const express = require('express')

const app = express() // create server

// 这样会报错 static() 里面必须写路径
// app.use('/', express.static('./index.html'))
app.use('/', express.static('./')) // 正确

app.use('/happyfri', express.static('../happyfri'))

var port  = 80

app.listen(port, function (err) {
    if(err) {
        console.log(err)
        return
    }
    var uri = 'http://localhost:' + port
    console.log('Listening at ' + uri + '\n')
})
