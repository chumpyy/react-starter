const User = require('./models/User');

function createAdmin() {
    const email = 'test@test.com';
    const name = 'test';
    const password = 'password';

    User.findOne({ name }, (err, user) => {
        if (err) {
            console.log(err);
        }
        else if (!user) {
            const newUser = new User({
                email,
                name,
                isAdmin: true,
                password: User.generateHash(password),
            });

            newUser.save((err2) => {
                if (err) {
                    console.log(err2);
                }
                else {
                    console.log('Admin created');
                }
            });
        }
    });
}

module.exports = {
    seed: () => {
        createAdmin();
    }
};
