

type twilioTime = {
    year: number,
    month: number,
    day: number,
    hours: number,
    minutes: number,
    seconds: number, 
}

export function twilioTimeConverter(inputTime: string): twilioTime {
    const inputDate = new Date(inputTime);
    console.log("Date:", inputDate)
    const year = inputDate.getUTCFullYear();
    const month = inputDate.getUTCMonth();
    const day = inputDate.getUTCDate()
    const hours = inputDate.getUTCHours()
    const minutes = inputDate.getUTCMinutes()
    const seconds = inputDate.getUTCSeconds()

    const twilioTime = { year, month, day, hours, minutes, seconds }
  
    return twilioTime

};