
import { accountSidConst, authTokenConst, twilioPhoneConst } from "../twilio/constants"

const accountSid = accountSidConst;
const authToken = authTokenConst;
const client = require('twilio')(accountSid, authToken);

export function twilioInitialMessage() {

new client.messages
    .create({
        body: `"Congratulations! You have now setup your Project Positive automated messaging service. 
        Expect to begin receiving texts! If you'd like to cancel anytime, 
        respond with "STOP".`,
        from: twilioPhoneConst,
        to: '+15184238009'
    })
    .then((message: { sid: string; }) => console.log(message.sid))
};