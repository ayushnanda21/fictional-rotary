const io = require("socket.io")(8900,{
    cors: {
        origin: "http://localhost:3000"
    }
});

//socket.io id always changing
let users=  [];

const addUser =(userId, socketId)=>{
    !users.some(user=> user.userId === userId) &&
        users.push({userId, socketId});
}

const removeUser  = (socketId)=>{
    users  = users.filter(user=>user.socketId !==socketId);
}

const getUser = (userId)=>{
    return users.find(user=>user.userId === userId);
}

//connection function
io.on("connection", (socket)=>{
    //when connect
    console.log("User connected");

    //take userId and socketId from user
    socket.on("addUser", userId=>{
        addUser(userId,socket.id);
        io.emit("getUsers", users);
    });

    //sending and getting messages
    socket.on('sendMessage',({senderId, receiverId, text})=>{
        const user  = getUser(receiverId);
        io.to(user.socketId).emit("getMessage",{
            senderId,
            text,
        });
    });

    //disconnection function
    socket.on("disconnect", ()=>{
    console.log("User disconnected");
    removeUser(socket.id);
    io.emit("getUsers", users);
    });  
});

