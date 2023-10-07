
import { accountSidConst, authTokenConst, twilioPhoneConst, twilioMessagingSeviceConst } from "../twilio/constants"

const accountSid = accountSidConst;
const authToken = authTokenConst;
const client = require('twilio')(accountSid, authToken);

export function twilioInitialMessage(name:string, phoneNumber:string, message:string) {

new client.validationRequests
    .create({friendlyName: `${name}`, phoneNumber: `+1${phoneNumber}`})

new client.messages
    .create({
        body: `Congratulations ${name}! Your Project Positive automated messaging is fully setup. 
        Expect to begin receiving texts! Here is your first message ... ${message}.`,
        from: twilioPhoneConst,
        to: `+1${phoneNumber}`
    })
    .then((message: { sid: string; }) => console.log(message))
};


export function twilioMessenger(name:string, phoneNumber:string, twilioTime:any, message: string){
    new client.messages
      .create({
         body: `Hi ${name}. Here is your Project Positive message this week. ${message}`,
         messagingServiceSid: twilioMessagingSeviceConst,
         sendAt: new Date(Date.UTC(twilioTime.year, twilioTime.month, twilioTime.day, twilioTime.hours, twilioTime.minutes, twilioTime.seconds)),
         scheduleType: 'fixed',
         to: `+1${phoneNumber}`
       })
       .then((message: { sid: string; }) => console.log(message.sid))
    };