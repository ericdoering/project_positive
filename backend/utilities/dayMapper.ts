
type WeekdaysMap = {
    [key: string]: number;
};

export function dayMapper(selectedWeekday: string) {
    const weekdaysMap: WeekdaysMap = {
        Sunday: 0,
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6,
    };


    const currentDate = new Date();
    const currentDay = currentDate.getUTCDay(); // Get the current day (0 for Sunday, 1 for Monday, etc.)

    console.log("SELECTED WEEKDAY", selectedWeekday)

    const selectedWeekdayNumber = weekdaysMap[selectedWeekday];

    console.log("SELECTED WEEKDAY NUMBER", selectedWeekdayNumber)

    let daysUntil = selectedWeekdayNumber - currentDay;


    console.log("DAYS UNTIL", daysUntil)

    // If the selected weekday is earlier or the same as the current day, add 7 days
    if (daysUntil <= 0) {
        daysUntil += 7;
    }

    return daysUntil;
}
