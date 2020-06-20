import React, {Component} from "react";
import "./Chats.css";

const Chat = ({message}) => {
    const {text, is_user_msg} = message;
    const chatclass = "Chat "+ (is_user_msg?"is-user-msg":"");
    return (
    <span className={chatclass}>{text}</span>
    );
};

class Chats extends Component{
    constructor(props){
        super(props);
        this.chatRef = React.createRef();
    }
    componentDidMount(){
        this.scrollToBotom();
    }
    componentDidUpdate(){
        this.scrollToBotom();
    }
    scrollToBotom(){
        this.chatRef.current.scrollTop = this.chatRef.current.scrollHeight;
    }

    render() {
        return(
            <div className="Chats" ref={this.chatRef}>
                {this.props.messages.map(message =>(
                    <Chat message={message} key={message.number} />
                ))}
            </div>
        )
    }
}
export default Chats;