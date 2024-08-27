
const webSocket=()=>{
    let data=undefined;
    const ws=new WebSocket("ws://localhost:3001")
    console.log(!ws.CONNECTING)
   
    ws.addEventListener("open",(event)=>{
        console.log(event)
    })
    
   
    ws.onmessage=(message)=>{
        console.log(JSON.parse((message.data)))

        data=(JSON.parse((message.data)))
    }
    return data
}
export default webSocket