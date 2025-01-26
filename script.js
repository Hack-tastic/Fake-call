let ringtoneAudio = document.getElementById("ringtone-audio");
let callMenu = document.getElementById("fake-call-menu");
let callScreen = document.getElementById("call-screen");
let callStatus = document.getElementById("call-status");
let callerNameDisplay = document.getElementById("caller-name-display");
let statusText = document.getElementById("status-text");

function scheduleFakeCall() {
    // Get the values from input fields
    let callerName = document.getElementById("caller-name").value;
    let callTime = document.getElementById("call-time").value;
    let ringtoneFile = document.getElementById("ringtone").files[0];

    if (!callerName || !callTime || !ringtoneFile) {
        alert("Please fill in all fields.");
        return;
    }

    // Schedule the fake call after the specified time
    setTimeout(function() {
        initiateFakeCall(callerName, ringtoneFile);
    }, callTime * 1000); // Convert to milliseconds

    // Hide the menu and show the status
    callMenu.classList.add("hidden");
    callStatus.classList.remove("hidden");
    statusText.textContent = `Fake call from ${callerName} scheduled in ${callTime} seconds.`;
}

function initiateFakeCall(callerName, ringtoneFile) {
    // Show the call screen
    callStatus.classList.add("hidden");
    callScreen.classList.remove("hidden");
    callerNameDisplay.textContent = callerName;

    // Set the ringtone audio file
    let objectURL = URL.createObjectURL(ringtoneFile);
    ringtoneAudio.src = objectURL;
    ringtoneAudio.play();
}

function answerCall() {
    statusText.textContent = "You answered the call.";
    ringtoneAudio.pause();
    callScreen.classList.add("hidden");
    callStatus.classList.remove("hidden");
}

function declineCall() {
    statusText.textContent = "You declined the call.";
    ringtoneAudio.pause();
    callScreen.classList.add("hidden");
    callStatus.classList.remove("hidden");
}

function goBackToMenu() {
    callStatus.classList.add("hidden");
    callMenu.classList.remove("hidden");
}
