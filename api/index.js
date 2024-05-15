import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{
  console.log('Connected to MongoDB');
}).catch((err) =>{
  console.log(err);
})

const app = express()

app.use(express.json());

const port = 3000

app.get('/test', (req, res) => {
  res.json({
    message: 'Hello World!',
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use("/api/user", userRouter);
app.use('/api/auth', authRouter);