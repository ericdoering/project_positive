
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
    const currentDay = currentDate.getUTCDay();
    const selectedWeekdayNumber = weekdaysMap[selectedWeekday];

    let daysUntil = selectedWeekdayNumber - currentDay;

    if (daysUntil <= 0) {
        daysUntil += 7;
    }

    return daysUntil;
};
