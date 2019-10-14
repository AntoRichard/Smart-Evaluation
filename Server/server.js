const express = require('express');
const app = express();
const MongoDB_Connection = require('./Database/Database');
const PORT = process.env.PORT || 5000;

app.use(express.json({ extends: false }));

MongoDB_Connection();

// const db = require('./Models/UserDetails');

// async function Save() {
//   const user = await new db({
//     name: 'Ajay',
//     email: 'ajay@cora.com',
//     phone: '567890987',
//     password: 'helloworld'
//   });

//   const res = await user.save();
//   console.log(res);
// }

// Save();

app.use(require('./Routes/Register'));
app.use(require('./Routes/Login'));
app.use(require('./Routes/Auth'));
app.use(require('./Routes/TwoMarks'));
app.use(require('./Routes/ThirteenMarks'));
app.use(require('./Routes/FifteenMarks'));
app.use(require('./Routes/UploadQes'));
app.use(require('./Routes/Dashboard'));
app.use(require('./Routes/Student'));

app.listen(PORT, () => console.log(`Server running in PORT : ${PORT}`));
