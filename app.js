const express = require("express");
const app = express();
const {createServer} = require('http')
const { Server } = require("socket.io");
const httpServer = createServer(app);
const cors = require('cors')
app.use(cors())
const io = new Server(httpServer, { 
    cors: {
        origin: "*",
    }
});

io.on("connection", (socket) => {
    socket.on("ping", (arg) => {
        io.emit('cariCABANG', arg); // world
      });
});
app.use("/",(req,res)=>{
    res.status(200).json({message:"connect"})
})
httpServer.listen(5001)
// server.listen(5001, () => {
//   console.log(`Current PORT:5001`);
// });