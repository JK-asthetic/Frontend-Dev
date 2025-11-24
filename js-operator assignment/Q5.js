// Q5. Boolean Logic Access System
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

let access = (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside)
    ? "Secure"
    : "Unsafe";

console.log("System Status:", access);