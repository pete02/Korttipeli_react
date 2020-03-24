const io = require('socket.io')();
let usedc=[]
var kerroin;
var luku
var jono=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52];
var i=0
var k=0

io.on('connection',function(socket){
    
    //console.log('connection established')
    socket.on('card',function(data){

        io.sockets.emit('scard', data)
        usedc.push(data)
    })
    socket.on('getcard',function(data){
        if(jono.length!==0){
            kerroin=52-i
            luku=jono[Math.floor(Math.random()*kerroin)]
            jono = jono.filter(function(value){
                return value !== luku;
            })
            i++
            io.sockets.emit(data,luku)
        }else{
            luku=usedc[k]
            usedc = usedc.filter(function(value){
                return value !== luku;
            });
            io.sockets.emit(data,luku)
            
        }
    })
    
})


const port=2000
io.listen(port);
console.log('listening to port '+port)