function createDay(){
    const calender_day = document.getElementById('calender_day');
    const newDay = document.createElement('div');
    const newDayText = document.createTextNode('2');

    

    newDay.appendChild(newDayText);
    calender_day.appendChild(newDay);
}

createDay();

let current = new Date();

function renderCalande(){
    const year = current.getFullYear();
    const month = current.getMonth();
    
    const calenderDay = document.getElementById("calendar_day");
    
}