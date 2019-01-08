const express = require('express')
const app = express();
const socket = require('socket.io')

//express.staticProvider(__dirname + '/public'))
app.use(express.static(__dirname+'/public'));

app.get('/',(req,res) => {
    //res.send('hello chat begins')
    res.render('index.html')
})

const server = app.listen(3000,()=>{
    console.log('listning on port 3000');
})




const conn = socket(server);

conn.on('connection',(inputs)=>{
    //console.log(inputs);

    inputs.on('chat',(data)=>{
        conn.sockets.emit('chat',data);
    })

    inputs.on('typing',(data)=>{
        inputs.broadcast.emit('typing',data);
        //.broadcast.emit
    })
})

