import express from "express";
import path from 'path'
import "./config/config.js";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const port = process.env.PORT;
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use('/api/users', userRoute);

if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve()
    app.use(express.static(path.join(__dirname, 'frontend/dist')))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html')))
} else {
app.get('/', (req, res)=>res.send('Server is ready'))
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is connected on port: ${port}`);
});
