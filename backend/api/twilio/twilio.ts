
import { accountSidConst, authTokenConst, twilioPhoneConst, twilioMessagingSeviceConst } from "../twilio/constants"

const accountSid = accountSidConst;
const authToken = authTokenConst;
const client = require('twilio')(accountSid, authToken);

export function twilioInitialMessage(name:string, phoneNumber:string) {

// new client.validationRequests
//     .create({friendlyName: `${name}`, phoneNumber: `+1${phoneNumber}`})

new client.messages
    .create({
        body: `Congratulations ${name}! You have now setup your Project Positive automated messaging service. 
        Expect to begin receiving texts!`,
        from: twilioPhoneConst,
        to: `+1${phoneNumber}`
    })
    .then((message: { sid: string; }) => console.log(message))
};


export function twilioMessenger(name:string, phoneNumber:string, twilioTime:any ){
    console.log("Twilio date: ", new Date(Date.UTC(twilioTime.year, twilioTime.month, twilioTime.day, twilioTime.hours, twilioTime.minutes)))
    console.log(twilioTime.seconds)
    new client.messages
      .create({
         body: 'This is a scheduled message',
         messagingServiceSid: twilioMessagingSeviceConst,
         sendAt: new Date(Date.UTC(twilioTime.year, twilioTime.month, 5, twilioTime.hours, twilioTime.minutes)),
         scheduleType: 'fixed',
         to: `+1${phoneNumber}`
       })
       .then((message: { sid: string; }) => console.log(message.sid))
    };