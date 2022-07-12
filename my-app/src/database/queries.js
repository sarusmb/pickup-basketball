const User = require('./models/user');

const queries = {
    getUsers: async function () {
        const users = await User.find({});
        return users;
    },
    getUser: async function (filter) {
        const user = await User.findById(filter);
        return user;
    }
}


module.exports = queries;