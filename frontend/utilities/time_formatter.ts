
export function formatTime(hour: string | null = "10:00", minute: string | null = "0:30", timeOfDay: string | null = "AM"): string {

    if (hour === null || hour === undefined || minute === null || minute === undefined || timeOfDay === null || timeOfDay === undefined) {
      return ''; 
    }
  
    const hourParts = hour.split(':');
    const minuteParts = minute.split(':');

    const hourNumber = parseInt(hourParts[0], 10);
    const minuteNumber = parseInt(minuteParts[1], 10);
  

    if (isNaN(hourNumber) || isNaN(minuteNumber) || (timeOfDay !== 'AM' && timeOfDay !== 'PM')) {
      throw new Error('Invalid time format. Please provide valid hour, minute, and time of day.');
    }

    const formattedHour = hourNumber % 12 || 12;
  
    const formattedMinute = minuteNumber < 10 ? `0${minuteNumber}` : minuteNumber.toString();
  
    const formattedTime = `${formattedHour}:${formattedMinute} ${timeOfDay}`;
  
    return formattedTime;
  }
  

  
  
  
  
  
  
  