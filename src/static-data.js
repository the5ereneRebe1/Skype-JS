import shortid from "shortid";
import faker from "faker";
import {sentence} from "txtgen";
import _ from "lodash";

export const users = generateUsers(10);
export const contacts = _.mapKeys(users,"user_id");
export const getMessages = messagePerUser => {
    let messages = {};
    _.forEach(users,user=>{
        messages[user.user_id]={
            ..._.mapKeys(generateMessages(messagePerUser),"number")
        };
    });
    return messages;
};

export const state = {
    user: generateUser(),
    messages: getMessages(10),
    contacts,
    typing: "",
    activeUserId: null
};

export function generateUser(){
    return {
        name: faker.name.findName(),
        email: faker.internet.email(),
        profile_pic: faker.internet.avatar(),
        status: sentence(),
        user_id: shortid.generate()
    }
}
function generateMessage(number){
    return {
        number,
        text: sentence(),
        is_user_msg: faker.random.boolean()
    };
}

function generateUsers(numOfUser){
    let arr = [];
    for(let i=0;i<numOfUser;i++)
        arr.push(generateUser());
    return arr;
}
function generateMessages(messagePerUser){
    let arr=[];
    for(let i=0;i<messagePerUser;i++)
        arr.push(generateMessage(i));
    return arr;
}