
import { TwilioTime } from "../../utilities/twilioTimeConverter";
import { accountSidConst, authTokenConst, twilioPhoneConst, twilioMessagingSeviceConst } from "../twilio/constants";


const accountSid = accountSidConst;
const authToken = authTokenConst;
const client = require('twilio')(accountSid, authToken);



export async function twilioInitialMessage(name:string, phoneNumber:string, message:string) {

try {
    new client.messages
        .create({
            body: `Congratulations ${name}! 
            Your Project Positive automated messaging is fully setup. 
            Expect to begin receiving texts! Here is your first message ... 
            ${message}.`,
            from: twilioPhoneConst,
            to: `+1${phoneNumber}`
        })
        .then((message: { sid: string; }) => console.log(message))
    }

    catch(error){
        console.log(`Failed to send message`);
    }
};


export async function twilioMessenger(name:string, phoneNumber:string, twilioTime: TwilioTime, message: string){
    try {
        new client.messages
        .create({
            body: `Hi ${name}. Here is your Project Positive message this week. ${message}`,
            messagingServiceSid: twilioMessagingSeviceConst,
            sendAt: new Date(Date.UTC(twilioTime.year, twilioTime.month, twilioTime.day, twilioTime.hours, twilioTime.minutes, twilioTime.seconds)),
            scheduleType: 'fixed',
            to: `+1${phoneNumber}`
        })
        .then((message: { sid: string; }) => console.log(message.sid))
        }

        catch(error){
            console.log(`Failed to send message`);
        }
};