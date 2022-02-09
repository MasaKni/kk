export const formatDate=(date) =>{
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}


const getDayValue = (value) => {
    let day;
    switch (value) {
        case "SUNDAY":
            day = 0;
            break;
        case "MONDAY":
            day = 1;
            break;
        case "TUESDAY":
            day = 2;
            break;
        case "WEDNESDAY":
            day = 3;
            break;
        case "THURSDAY":
            day = 4;
            break;
        case "FRIDAY":
            day = 5;
            break;
        case  "SATURDAY":
            day = 6;

    }

    return day;

}


export const getDayCountBetweenDates = (start,end,day_name)=>{
    const dayMilliseconds = 1000 * 60 * 60 * 24;
    let weekendDays = 0;
    const dayNumber =getDayValue(day_name);
    while (start <= end) {
        let day = start.getDay()
        if (day == dayNumber) {
            weekendDays++;
        }
        start = new Date(+start + dayMilliseconds);
    }
    return weekendDays;
}



