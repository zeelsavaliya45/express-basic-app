const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get(`/cake`, (req, res) => {
//     res.send('cake')
// })
// app.get(`/cake/ahemdabad`, (req, res) => {
//     res.send('cake Ahemdabad')
// })
// app.get(`/cake/surat`, (req, res) => {
//     res.send('cake surat')
// })
// app.get('/', (req, res) => {
//  res.sendFile(__dirname+'/home.html')
// })
// app.get('/home', (req, res) => {
//     res.sendFile(__dirname+'/home.html')
//    })
// app.get('/about', (req, res) => {
// res.sendFile(__dirname+'/about.html')
// })
app.get('/contact', (req, res) => {
res.sendFile(__dirname+'/contact.html')
})
app.get('/process',(req, res)=>
{
    var eng = req.query.eng;
    var mat = req.query.mat;
    var mad = req.query.mad;
    var guj = req.query.guj;
    var hin = req.query.hin;
    var avg = parseInt(eng)+parseInt(mat)+parseInt(mad)+parseInt(guj)+parseInt(hin)/5;
    res.send('Average is'+avg)
})
app.listen(port,()=>{
console.log(`Example app listening on port ${port}`)
})