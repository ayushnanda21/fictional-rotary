import "./messenger.css";
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversation/Coversation"
import Message from "../../components/message/Message"
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

import {io} from "socket.io-client"


export default function Messenger() {

     //grabbing current user
    const [conversations, setConversations] = useState([]);
    const [currentChat , setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    //use state for socket
    const socket = useRef();
    
    const {user} = useContext(AuthContext);
    const scrollRef = useRef();

    useEffect(()=>{
        socket.current= io("ws://localhost:8900");
    },[])

    useEffect(()=>{
        socket.current.emit("addUser", user._id, );
        socket.current.on("getUsers", users=>{
            console.log(users);
        })
    },[user])

    useEffect(() => {
        const getConversations = async () => {
          try {
            const res = await axios.get("/conversations/" + user._id);
            setConversations(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getConversations();
      }, [user]);

  //useEffect for chat
  useEffect(()=>{
    const getMessages = async()=>{
        try{
            const res = await axios.get("/messages/" + currentChat?._id)
            setMessages(res.data);
        }catch(err){
            console.log(err);
        }
    };
        getMessages();
  },[currentChat])

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const message = {
        sender : user._id,
        text: newMessage,
        conversationId: currentChat._id
    };
    try{
        const res = await axios.post("/messages", message);
        setMessages([...messages, res.data])
        setNewMessage("")
    }catch(err){
        console.log(err);
    }

  }

  //automatic chat window scroll using useRef()
  useEffect(()=>{
    scrollRef.current?.scrollIntoView({behaviour : "smooth"})
  },[messages])
  

  return (
      <>
    <Topbar />
    <div className="messenger">
        <div className="chatMenu">
            <div className="chatMenuWrapper">
                <input placeholder='Search for your friends' className="chatMenuInput" />
               {conversations.map((c)=>(
                   <div onClick={()=> setCurrentChat(c)}>
                   <Conversation conversation={c} currentUser ={user} />
                    </div>
               ))}
            </div>
        </div>
        <div className="chatBox">
            <div className="chatBoxWrapper">
                {
                    currentChat ? (
                <>
                <div className="chatBoxTop">
                    <div ref={scrollRef}>
                    {messages.map((m)=>(
                        <Message message={m} own={m.sender ===user._id } />
                    ))}
                    </div>
                   
                </div>
                <div className="chatBoxBottom">
                    <textarea placeholder='Write something' className='chatMessageInput' onChange={(e)=> setNewMessage(e.target.value)} value={newMessage} ></textarea>
                    <button className="chatSubmitButton" onClick={handleSubmit} >Send</button>
                </div>  </> ):( <span className="noConversationText">Open a conversation to start chat </span> )}   
            </div>
        </div>
        <div className="chatOnline">
            <div className="chatOnlineWrapper">
                <ChatOnline />
            </div>
        </div>
    </div>

   </>
  )
}
