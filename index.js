//Global varaiables
let dayOfTheWeek;
let previousDay;
let nextDay;
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

    //Remove outline of the button after click and change button's name
    button.blur();

    //Select the title
    let titleName = document.querySelector(".title-name");

    //Check button's name
    if (button.textContent == "Login") {
        button.textContent = "Log Out";

        //Animate the title
        titleName.style.marginLeft = "35px";
        titleName.style.transition = "1.5s";

        //Asign the name to the page title
        document.title = "YourDay";
        titleName.innerHTML = "Good morning! <br> Here are the tasks for today";
    }
    else {
        //Change the button name to login again
        button.textContent = "Login";

        //Animate the title
        titleName.style.marginLeft = "0";
        titleName.style.transition = "1.5s";

        //Asign the name to the page title
        document.title = "My day";
        titleName.innerHTML = "Today's tasks";
    }

}

//Change backgrouns style
function changeBackgroundColor(style) {
    //Get the body and the titles rom the document
    let myBody = document.querySelector("body");
    let myTitle = document.querySelector("#title-task");
    let myTaskTitle = document.querySelector(".your-tasks-title");

    //Remove the active class
    let firstActive = document.querySelectorAll(".dropdown-item");
    firstActive.forEach((eachItem) => {
        if (eachItem.classList.contains("is-active")) {
            eachItem.classList.remove("is-active");
        }
    });

    //Add the active class for the selected style
    style.classList.add("is-active");

    //Add the background image and some style for each theme
    if (style.textContent == "Light") {
        myTitle.style.color = "#57a0a5";
        myTaskTitle.style.color = "#57a0a5";
        myBody.style.backgroundImage = `url('imgs/background.jpeg')`;
    }
    else if (style.textContent == "Medium") {
        myTitle.style.color = "#495057";
        myTaskTitle.style.color = "#495057";
        myBody.style.backgroundImage = `url('imgs/medium.jpeg')`;
    }
    else if (style.textContent == "Dark") {
        myTitle.style.color = "#ebf1f3";
        myTaskTitle.style.color = "#ebf1f3";
        myBody.style.backgroundImage = `url('imgs/dark.jpeg')`;
    }
}

//Move a task from lisk of tasks to your tasks
function addToYourTasks(task) {
    //Select the task by status
    let status = task.querySelector(".task-status");

    //Creating a copy of the task
    let copy = task;

    //If task is available delete it and move the copy into your task container
    if (status.textContent == "available") {
        //Remove the task from today's tasks
        task.remove();

        //Select the doing/done container
        let yourTasksContainer = document.querySelector("#your-tasks-container");

        //Change status to in progress
        let copyStatus = task.querySelector(".task-status");
        copyStatus.textContent = "in progress";
        copyStatus.style.color = "#4b7d96";

        //Append it to doing/done tasks
        yourTasksContainer.appendChild(copy);
    }

}

//Fetch data
function fetchData() {
    //The json file we want to access
    const endpoint = "data.json";

    //Fetching data
    fetch(endpoint)
        .then(e => e.json())
        .then(tasks => showTasks(tasks));
}

//Loop through every single object
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

        //Make the tasks from yesterday unavailable
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

        //Make the tasks for tomorrow unavailable
        clone.querySelector(".task-status").textContent = "unavailable";
        clone.querySelector(".task-status").classList.add("task-unavailable");

        //Append the new task to the container
        tasksContainer.appendChild(clone);
    }
}

//Change the tasks from today to yesterday and back
function goToPreviousDay(setButton) {

    if (setButton.textContent == "Yesterday") {

        //Hide the today's tasks
        let todaySection = document.querySelector("#tasks-container");
        todaySection.style.display = "none";

        //Show yesterday tasks
        let yesterdaySection = document.querySelector("#previous-day");
        yesterdaySection.style.display = "block";

        //Make the button able to go back
        setButton.textContent = "Get back to today's tasks";

        //Hide the next day button
        let next = document.querySelector(".next-day");
        next.style.display = "none";

        //Change title name to yesterday
        let myTitle = document.querySelector(".title-name");
        myTitle.textContent = `Yesterday tasks`;
    }
    else {
        //Same operation, just in reverse when the button is called
        //get back to today's tasks

        //Show today's tasks again
        let todaySection = document.querySelector("#tasks-container");
        todaySection.style.display = "block";

        //Hide yesterday tasks
        let yesterdaySection = document.querySelector("#previous-day");
        yesterdaySection.style.display = "none";

        //Make the button name Yesterday again
        setButton.textContent = "Yesterday";

        //Show the next day button
        let next = document.querySelector(".next-day");
        next.style.display = "block";

        //Change title name to today
        let myTitle = document.querySelector(".title-name");
        myTitle.textContent = `Today's tasks`;
    }
}

//Change the tasks from today to tomorrow and back
function goToNextDay(setButton) {

    if (setButton.textContent == "Tomorrow") {

        //Hide the today's tasks
        let todaySection = document.querySelector("#tasks-container");
        todaySection.style.display = "none";

        //Show the tomorrow's tasks
        let tomorrowSection = document.querySelector("#next-day");
        tomorrowSection.style.display = "block";

        //Make the user able to come back to today's tasks
        setButton.textContent = "Get back to today's tasks";

        //Hide the button for previous days
        let previous = document.querySelector(".previous-day");
        previous.style.display = "none";

        //Change title name to tomorrow
        let myTitle = document.querySelector(".title-name");
        myTitle.textContent = `Tomorrow's tasks`;
    }
    else {
        //When the button is called Get back to today's tasks

        //Show today's tasks again
        let todaySection = document.querySelector("#tasks-container");
        todaySection.style.display = "block";

        //Hide tomorrow's tasks
        let tomorrowSection = document.querySelector("#next-day");
        tomorrowSection.style.display = "none";

        //Set the name of the button to Tommorrow
        setButton.textContent = "Tomorrow";

        //Show the yesterday button 
        let previous = document.querySelector(".previous-day");
        previous.style.display = "block";

        //Change title back name to today's tasks
        let myTitle = document.querySelector(".title-name");
        myTitle.textContent = `Today's tasks`;
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

            //Set the day we need
            theNewDay = weekArray[i];

            //Setting our global variable with today's day of the week
            dayOfTheWeek = weekArray[i];

            //Pass the value of previous day to the global variable to be used later on
            if (weekArray[i - 1]) {
                previousDay = weekArray[i - 1];
            }
            else {
                previousDay = weekArray[weekArray.length - 1];
            }

            //Pass the value of next day to the global variable to be used later on
            if (weekArray[i + 1]) {
                nextDay = weekArray[i + 1];
            }
            else {
                previousDay = weekArray[0];
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

//Count your tasks
function countTasks() {
    //Count the tasks for the day we need
    let availableTasks = document.querySelector("#your-tasks-container");
    let tasksAmount = availableTasks.childElementCount;

    //Write them on the title of doing/done tasks
    let documentTitle = document.querySelector(".your-tasks-title");
    documentTitle.textContent = `Doing or done today (${tasksAmount})`;

}
setInterval(countTasks, 100);