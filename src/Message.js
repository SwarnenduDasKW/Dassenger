import React, {forwardRef} from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import "./Message.css";


const Message = forwardRef(({username,message}, ref) => {

          
    // console.log("username -->>>>",username);
    console.log("message -->>>>",message);
    const isUser = username === message.username
    // console.log("isUser",isUser);
    // console.log("class",`message ${isUser && 'message__user' }`);
    return (
        <div ref={ref} className={`message ${isUser && 'message__user' }`}>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    {/* <Typography color="white" variant="h5" component="h4">  */}
                        {message.username}:{message.message}
                    {/* </Typography> */}
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
