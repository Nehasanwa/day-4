const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (request,response)=>{
    response.send('welcome to twitter')
        })

app.get('/instagram', (request,response)=>{
    response.send('welcome to Instagram')
        })        

app.get('/facebook', (request,response)=>{
    response.send('welcome to Facebook')
        })

app.get('/snapchat', (request,response)=>{
    response.send('welcome to Snapchat')
        })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/youtube', (request,response)=>{
    response.send({message:"youtube is blocked"})
        })


app.get('/example', (request,response)=>{
    res.status(216).send(sampleObject)
                })

app.get('/:name', (request,response)=>{
    const outputName = req.params.name
    response.send({msg: 'welcome ${outputName}'})
    console.log(outputName);
})
                
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

