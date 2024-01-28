
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const authRoutes = require('./Routes/auth')


mongoose.connect('mongodb://localhost:27017/Login', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => { console.log("DB Connected") })
  .catch(() => { console.log(error) })

app.use(express.json());
app.use('/auth', authRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
}
);