
import { accountSidConst, authTokenConst, twilioPhoneConst } from "../twilio/constants"

const accountSid = accountSidConst;
const authToken = authTokenConst;
const client = require('twilio')(accountSid, authToken);

export function twilioInitialMessage(name:string, phoneNumber:string) {

new client.validationRequests
    .create({friendlyName: `${name}`, phoneNumber: `+1${phoneNumber}`})

new client.messages
    .create({
        body: `Congratulations! You have now setup your Project Positive automated messaging service. 
        Expect to begin receiving texts! If you'd like to cancel anytime, 
        respond with "STOP.`,
        from: twilioPhoneConst,
        to: `+1${phoneNumber}`
    })
    .then((message: { sid: string; }) => console.log(message))
};


export function twilioMessenger(name:string, phoneNumber:string, date:string){
    new client.messages
      .create({
         body: 'This is a scheduled message',
         messagingServiceSid: accountSid,
         sendAt: new Date(date),
         scheduleType: 'fixed',
         to: `+1${phoneNumber}`
       })
       .then((message: { sid: string; }) => console.log(message.sid))
    };