import { dayMapper } from "../utilities/dayMapper";

export type TwilioTime = {
    year: number,
    month: number,
    day: number,
    hours: number,
    minutes: number,
    seconds: number, 
};

type Time =  {
    hour: string,
    minute: string,
    timeOfDay: string
}


export function twilioTimeConverter(time: Time, dayStr: string): TwilioTime {
    const calculatedDay = dayMapper(dayStr as string);

    const hourPart = time.hour.split(":");
    const minutePart = time.minute.split(":");
    const slicedHour = hourPart[0];
    const slicedMinute = minutePart[1];

    const hour = parseInt(slicedHour);
    const minute = parseInt(slicedMinute);

    let additionalTime = 0;

    if (time.timeOfDay === "PM") {
        additionalTime += 12;
    } else {
        additionalTime += 0;
    }

    const date = new Date();
    date.setUTCDate(date.getUTCDate() + calculatedDay); 

    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const day = date.getUTCDate();
    const hours = hour + additionalTime;
    const minutes = minute;
    const seconds = 0;

    const twilioTime: TwilioTime = { year, month, day, hours, minutes, seconds };

    return twilioTime;
};



