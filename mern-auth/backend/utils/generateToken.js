import jwt from "jsonwebtoken";

const genrateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.jwt_secret, {
        expiresIn: '30d'
    })
    const cookieOption = {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 30*24*3600*1000
    }
    res.cookie('jwt', token, cookieOption)
}

export default genrateToken;