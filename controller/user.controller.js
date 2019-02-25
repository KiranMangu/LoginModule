import user from '../model/user.model';

export function register(req, res, next) {
    const newUser = new user();
    newUser.userid = req.body.userid;
    newUser.email = req.body.email;
    newUser.password = req.body.password;

    newUser.save((err) => {
        if (!err) {
            console.log(`New user ${newUser.userid} Saved successfully`);
        }
        else {
            // res.send()
            console.log(`Failed saving the using details Error msg: ${err}`);
        }
    });

}