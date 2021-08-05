/**
 * https://www.tutorialsteacher.com/nodejs/nodejs-eventemitter
 * Node js events module is the base module for event driven programming
 */

import EventEmitter from "events";


/**
 * Ex.1
 * Event Listeners and emitter
 */

const notificationEventEmitter = new EventEmitter();

notificationEventEmitter.addListener('send-sms', async function(data) {
    console.log("[INFO] Sending SMS with: " + JSON.stringify(data));
})

notificationEventEmitter.addListener('send-email', async function(data) {
    console.log("[INFO] Sending Email with: " + JSON.stringify(data));
})

// in seperate module 
function myAPI() {
    notificationEventEmitter.emit('send-sms', {
        mobile: "01686087163",
        message: "Hello World"
    })
}


function myAPI2() {
    notificationEventEmitter.emit('send-email', {
        email: "ovi@gamil.com",
        message: "Something"
    })
}

// myAPI2();

/**
 * Ex.2
 * Observer design pattern
 */


class UserService extends EventEmitter {
    create() {
        console.log("[INFO] user created");
        this.emit('user-created', {id: 1, name: 'nahid'});
    }

    update() {
        console.log("[INFO] user updated");
        this.emit('user-updated');
    }
}

const userSerice = new UserService();

// in a separate modules
function informOtherApp() {
    userSerice.on('user-created', function(data) {
        console.log("[INFO] passing data: ", JSON.stringify(data))
    })

    userSerice.on('user-updated', function() {
        console.log("[INFO] informing update of user")
    })
}

// informOtherApp();
// userSerice.create();
// userSerice.update();







