const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors({}));
app.use(cookieSession({ keys: ['nvlsnvljfdbvljddabvlkhfb']}));
app.use('/api/products/', productRouter);
app.use('/api/users/', userRouter);
app.use('/auth/', authRouter);

// Route Handler for undefined routes
app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can not find ${req.originalUrl} on this server`
  })  
});

app.listen(5000, () => {
  console.log('Listening on Port 5000...');
});