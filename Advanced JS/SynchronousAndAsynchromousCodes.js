//Synchronous - tasks in series, only executes after previous tasks completed, blocking
//Asynchronous - tasks in parallel, can execute in parallel, non-blocking

//Asynchronous eg
console.log("hi");

setTimeout(function cb(){
    console.log("timeout!!"); //callback function
}, 4000);
console.log("How are you")
//order: hi, how are you, timeout!!!

//callback: functions passed into another function

