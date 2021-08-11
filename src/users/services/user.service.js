

function createUser(mobile, password) {
    console.log("[INFO] I am creating a user"); // insert into user values()
    const id = Math.floor(Math.random() * 1000);
    return id;
}

module.exports = {
    createUser
}