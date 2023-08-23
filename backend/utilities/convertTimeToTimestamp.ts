export function convertTimeToTimestamp(timeString: string): string | null {
    const [time, meridiem] = timeString.split(' ');
    const [hours, minutes] = time.split(':');
  
    let hour = parseInt(hours, 10);
    const minute = parseInt(minutes, 10);
  
    if (meridiem.toLowerCase() === 'pm' && hour !== 12) {
      hour += 12;
    } else if (meridiem.toLowerCase() === 'am' && hour === 12) {
      hour = 0;
    }
  
    if (isNaN(hour) || isNaN(minute)) {
      return null; // Invalid input
    }
  
    const now = new Date();
    const timestamp = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute);
    
    return timestamp.toISOString(); // Returns a valid SQL Timestamp
  }