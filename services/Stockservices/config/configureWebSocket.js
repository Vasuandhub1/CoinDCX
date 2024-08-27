const {WebSocketServer} =require("ws")


let wss=undefined
const createWebSocket=(server)=>{
     wss= new WebSocketServer({server})
     if(wss){
        console.log("connected to websocket server")
        wss.on('connection', function connection(ws, request, client) {
            console.log("connected")
            ws.on('error', console.error);
           
            
          
            ws.on('message', function message(data) {
              console.log(`Received message ${data} from user ${client}`);
            });
            
          });
    }else{
        
    }
}

const getServer=()=>{
    if(wss){
          return wss;
    }else{
        console.log("connect to web socket first")
    }
}

module.exports={createWebSocket,getServer}