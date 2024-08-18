import jwt from "jsonwebtoken";
import User from "../modals/userModal.js";

const protect = async (req, res, next) => {
    let token;
    try {
        token = req.cookies.jwt;
        if (token) {
            try {
                const decoded = jwt.verify(token, process.env.jwt_secret)
                req.user = await User.findById(decoded.userId).select('-password')
                next()
            } catch (error) {
                res.status(401)
                throw new Error('Not authorized, invalid token')
            }
        } else {
            res.status(401);
            throw new Error('Not authorized, no token')
        }
    } catch (error) {
        next(error)
    }
}

export { protect }