const express = require('express');
const bodyParser = require('body-parser');

const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api/products/', productRouter);
app.use('/api/users/', userRouter);
app.use('/auth', authRouter);

app.listen(5000, () => {
  console.log('Listening on Port 5000...');
});