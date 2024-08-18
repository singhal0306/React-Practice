import User from "../modals/userModal.js"
import genrateToken from "../utils/generateToken.js";

//desc Auth user/set token
//route POST /api/users/auth
//access Public
const authUser = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user && await user.matchPassword(password)) {
            genrateToken(res, user._id)
            res.status(201).json({
                _id: user._id,
                name: user.name,
                emai: user.email
            })
        } else {
            res.status(401);
            throw new Error("Invalid user data")
        }
    } catch (error) {
        next(error);
    }
}

//desc Register a new User
//route POST /api/users/
//access Public
const registerUser = async (req, res, next) => {
    const { name, email, password } = req.body;
    try {
        const userExist = await User.findOne({ email });
        if (userExist) {
            res.status(400)
            throw new Error('User already exist')
        }
        const user = await User.create({
            name,
            email,
            password
        })
        if (user) {
            genrateToken(res, user._id)
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email
            })
        } else {
            res.status(400);
            throw new Error("Invalid user data")
        }
    } catch (error) {
        next(error)
    }

}

//desc Logout a user
//route POST /api/users/logout
//access Public
const logoutUser = (req, res, next) => {
    try {
        res.cookie('jwt', '', {
            httpOnly: true,
            expires: new Date(0),
        })
        res.status(200).json({ message: "User logged out" });
    } catch (error) {
        next(error)
    }
}

//desc Get user profile
//route GET /api/users/profile
//access Private
const getUserProfile = (req, res, next) => {
    try {
        const user = {
            _id: req.user._id,
            name: req.user.name,
            email: req.user.email
        }
        res.status(200).json(user);
    }
    catch (error) {
        next(error)
    }
}

//desc Update User profile
//route PUT /api/users/profile
//access Private
const updateUserProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id)
        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            if (req.body.password) {
                user.password = req.body.password
            }
            const updatedUser = await user.save();
            res.status(200).json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email
            })

        } else {
            res.status(404);
            throw new Error('User not found')
        }
    } catch (error) {
        next(error)
    }
}

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};