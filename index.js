let dayOfTheWeek;
let previousDay;
let nextDay;
let timestamp;
let hour;

//Animate the list
var tl = new TimelineLite();
tl.staggerFrom("#tasks-container", .7, { y: 500 });


//Get the time function
getTime();

//Fetch JSON file
fetchData();

//Functions to change the page name with the name of the task
function changePageTitle(button) {

    //Remove outline of the button after click
    button.blur();

    let titleName = document.querySelector(".title-name");

    titleName.style.marginLeft = "40px";
    titleName.style.transition = "1.5s";

    //Asign the name of the task to the page title
    document.title = "YourDay";
    let pageTitle = document.querySelector(".title-name");
    pageTitle.textContent = "Good morning! Here are the tasks for today";
}

//Change backgrouns style
function changeBackgroundColor(style) {
    //Get the body, the title and the tasks section from the document
    let myBody = document.querySelector("body");
    let myTaskContainer = document.querySelector("#tasks-container");
    let myTitle = document.querySelector("#title-task");

    //Remove the active class
    let firstActive = document.querySelectorAll(".dropdown-item");
    firstActive.forEach((eachItem) => {
        if (eachItem.classList.contains("is-active")) {
            eachItem.classList.remove("is-active");
        }
    });

    //Add the active class for the selected style
    style.classList.add("is-active");

    //Add the background image for each style
    if (style.textContent == "Light") {
        myTitle.style.color = "#57a0a5";
        myBody.style.backgroundImage = `url('imgs/background.jpeg')`;
    }
    else if (style.textContent == "Medium") {
        myTitle.style.color = "#495057";
        myBody.style.backgroundImage = `url('imgs/medium.jpeg')`;
    }
    else if (style.textContent == "Dark") {
        myTitle.style.color = "#ebf1f3";
        myBody.style.backgroundImage = `url('imgs/dark.jpeg')`;
    }
}

function addToYourTasks(task) {
    let status = task.querySelector(".task-status");
    let copy = task;
    if (status.textContent == "available") {
        task.remove();
        let yourTasksContainer = document.querySelector("#your-tasks-container");
        yourTasksContainer.appendChild(copy);
        var tl = new TimelineLite();
        tl.staggerFrom(copy, .7, { y: 500 });
    }

}

//Fetch data
function fetchData() {
    //The json file we want to access
    const endpoint = "http://gitlab.wd-agency.com/snippets/2/raw";

    //Fetching data
    fetch(endpoint)
        .then(e => e.json())
        .then(tasks => showTasks(tasks));
}


function showTasks(tasks) {
    tasks.forEach(showSingleTask);
}

//Go through any single element of data and create a clone of the template for each
function showSingleTask(task) {

    //Get only the data for today
    if (task.day == dayOfTheWeek) {

        //Selecting the Container of tasks and the template for any task
        const tasksContainer = document.querySelector("#tasks-container");
        const tasksTemplate = document.querySelector("#tasks-template").content;

        //Creating a new clone for the new task
        let clone = tasksTemplate.cloneNode(true);

        //Passing the value from the external file to the internal file
        clone.querySelector(".task-time").textContent = task.time;
        clone.querySelector(".task-description").textContent = task.description;

        //Get the actual hour
        let hourNumber = parseInt(hour);

        //Get the task hour
        let taskHour = (task.time).slice(0, 2);
        let taskHourNumber = parseInt(taskHour);

        //Set a limit of 2 hours for the task to be taken after the task time
        taskHourNumber = taskHourNumber + 2;

        //Avoid the impossible hours 24 and 25
        if (taskHourNumber >= 24) {
            if (taskHourNumber == 24) {
                taskHourNumber = 0;
            }
            if (taskHourNumber == 25) {
                taskHourNumber = 1;
            }
        }

        //If the time of the day is 2 hours past the task, tasks becomes unavailable
        if (hourNumber > taskHourNumber) {
            clone.querySelector(".task-status").textContent = "unavailable";
            clone.querySelector(".task-status").classList.add("task-unavailable");
        }

        //Append the new task to the container
        tasksContainer.appendChild(clone);
    }

    if (task.day == previousDay) {
        //Selecting the Container of tasks and the template for any task
        const tasksContainer = document.querySelector("#previous-day");
        const tasksTemplate = document.querySelector("#tasks-template").content;

        //Creating a new clone for the new task
        let clone = tasksTemplate.cloneNode(true);

        //Passing the value from the external file to the internal file
        clone.querySelector(".task-time").textContent = task.time;
        clone.querySelector(".task-description").textContent = task.description;

        //Get the actual hour
        let hourNumber = parseInt(hour);

        //Get the task hour
        let taskHour = (task.time).slice(0, 2);
        let taskHourNumber = parseInt(taskHour);

        //Set a limit of 2 hours for the task to be taken after the task time
        taskHourNumber = taskHourNumber + 2;

        //Avoid the impossible hours 24 and 25
        if (taskHourNumber >= 24) {
            if (taskHourNumber == 24) {
                taskHourNumber = 0;
            }
            if (taskHourNumber == 25) {
                taskHourNumber = 1;
            }
        }


        clone.querySelector(".task-status").textContent = "unavailable";
        clone.querySelector(".task-status").classList.add("task-unavailable");

        //Append the new task to the container
        tasksContainer.appendChild(clone);
    }

    if (task.day == nextDay) {
        //Selecting the Container of tasks and the template for any task
        const tasksContainer = document.querySelector("#next-day");
        const tasksTemplate = document.querySelector("#tasks-template").content;

        //Creating a new clone for the new task
        let clone = tasksTemplate.cloneNode(true);

        //Passing the value from the external file to the internal file
        clone.querySelector(".task-time").textContent = task.time;
        clone.querySelector(".task-description").textContent = task.description;

        //Get the actual hour
        let hourNumber = parseInt(hour);

        //Get the task hour
        let taskHour = (task.time).slice(0, 2);
        let taskHourNumber = parseInt(taskHour);

        //Set a limit of 2 hours for the task to be taken after the task time
        taskHourNumber = taskHourNumber + 2;

        //Avoid the impossible hours 24 and 25
        if (taskHourNumber >= 24) {
            if (taskHourNumber == 24) {
                taskHourNumber = 0;
            }
            if (taskHourNumber == 25) {
                taskHourNumber = 1;
            }
        }

        clone.querySelector(".task-status").textContent = "unavailable";
        clone.querySelector(".task-status").classList.add("task-unavailable");

        //Append the new task to the container
        tasksContainer.appendChild(clone);
    }
}

function goToPreviousDay(setButton) {
    if (setButton.textContent == "Yesterday") {
        let todaySection = document.querySelector("#tasks-container");
        todaySection.style.display = "none";

        let yesterdaySection = document.querySelector("#previous-day");
        yesterdaySection.style.display = "block";
        setButton.textContent = "Get back to today's tasks";

        let next = document.querySelector(".next-day");
        next.style.display = "none";
    }
    else {
        let todaySection = document.querySelector("#tasks-container");
        todaySection.style.display = "block";

        let yesterdaySection = document.querySelector("#previous-day");
        yesterdaySection.style.display = "none";
        setButton.textContent = "Yesterday";
        let next = document.querySelector(".next-day");
        next.style.display = "block";
    }
}

function goToNextDay(setButton) {
    if (setButton.textContent == "Tomorrow") {
        let todaySection = document.querySelector("#tasks-container");
        todaySection.style.display = "none";

        let tomorrowSection = document.querySelector("#next-day");
        tomorrowSection.style.display = "block";
        setButton.textContent = "Get back to today's tasks";

        let previous = document.querySelector(".previous-day");
        previous.style.display = "none";
    }
    else {
        let todaySection = document.querySelector("#tasks-container");
        todaySection.style.display = "block";

        let tomorrowSection = document.querySelector("#next-day");
        tomorrowSection.style.display = "none";
        setButton.textContent = "Tomorrow";
        let previous = document.querySelector(".previous-day");
        previous.style.display = "block";
    }
}

function getTime() {
    //Arrays for weekdays and months
    let weekArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //Get the html elements where we are going to add the date and the time
    let realDay = document.querySelector(".real-day");
    let realTime = document.querySelector(".real-time");

    //Creating the elements in the fornmat we need
    let theNewDay;
    let theNewTime;

    //Generate the actual date and make it a string in order to be procesed later on
    let date = new Date;
    let today = date.toString();

    //Creating a global timestamp
    timestamp = date.getTime();

    //Getting hours and minutes
    let hourNow = date.getHours();
    let minutesNow = date.getMinutes();

    //Pass hour to global
    hour = hourNow;

    //Setting the clock for AM
    if (hourNow > 12) {

        hourNow = hourNow - 12;
        if (hourNow < 10) {
            hourNow = "0" + hourNow;
        }

        theNewTime = hourNow;

        //Adding 0 for minutes under 10 ( 5 -> 05)
        if (minutesNow < 10) {
            minutesNow = "0" + minutesNow;
        }

        //Creating the final format for the time
        theNewTime = theNewTime + "." + minutesNow + " " + "PM";
    }
    //Setting the clock for PM
    else {
        theNewTime = hourNow;

        //Adding 0 for minutes under 10 ( 5 -> 05)
        if (minutesNow < 10) {
            minutesNow = "0" + minutesNow;
        }

        //Creating the final format for the time
        theNewTime = theNewTime + "." + minutesNow + " " + "AM";
    }

    realTime.textContent = theNewTime;

    //Getting the first 3 letters from the day of the week
    let weekDay = today.slice(0, 3);


    //Getting the full name of the day of the week we need
    for (let i = 0; i < weekArray.length; i++) {
        let sliceDay = weekArray[i].slice(0, 3);
        if (sliceDay == weekDay) {
            theNewDay = weekArray[i];
            dayOfTheWeek = weekArray[i];
            if (weekArray[i - 1]) {
                previousDay = weekArray[i - 1];
            }
            if (weekArray[i + 1]) {
                nextDay = weekArray[i + 1];
            }
        }
    }

    //Adding the day and the number ending letters for the day  
    if (today.slice(8, 10) == "01") {
        theNewDay = theNewDay + " " + "1st";
    }
    else if (today.slice(8, 10) == "02") {
        theNewDay = theNewDay + " " + "2nd";
    }
    else if (today.slice(8, 10) == "03") {
        theNewDay = theNewDay + " " + "3rd";
    }
    //Modifying dates like 04, 05 to be 4th and 5th
    else if (today.slice(8, 9) == "0") {
        theNewDay = theNewDay + " " + today.slice(9, 10) + "th";
    }
    //All the dates from 10-31 will get th at the end
    else {
        theNewDay = theNewDay + " " + today.slice(8, 10) + "th";
    }
    //Adding month and year
    let actualMonth = monthArray[date.getMonth()];
    let actualYear = date.getFullYear();
    theNewDay = theNewDay + " " + actualMonth + " " + actualYear;
    //Adding the final created format to the website paragraph
    realDay.textContent = "Today is " + theNewDay;

}
//Looping the function every 0.9 second
setInterval(getTime, 900);