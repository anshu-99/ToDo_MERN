const express = require('express');
const path = require('path');
const port = 8001;
const app = express();
const db = require('./config/mongoose');
const Practice = require('./model/schema');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true })); // Use extended to parse nested objects in the form data

// fetch
app.get('/', async function(req, res) {
  try {
    const practice = await Practice.find({});
    return res.render('view', {
      title: "ToDo",
      data_list: practice
    });
  } catch (err) {
    console.error("Error fetching the records", err);
    res.status(500).send("Internal Server Error");
  }
});

// create
app.post('/form_data', async function(req, res) {
  try {
    const newData = await Practice.create({
      taskDescription: req.body.taskDescription,
      category: req.body.category,
      taskDate: req.body.taskDate
      // UID: req.body.UID,
      // DOB: req.body.DOB
    });
    console.log('****', newData);
    return res.redirect('back');
  } catch (err) {
    console.error('Error in creating data', err);
    res.status(500).send("Internal Server Error");
  }
});
// delete
app.get('/delete-contact', async function(req, res) {
  try {
    let id = req.query.id;
    await Practice.findByIdAndDelete(id);
    return res.redirect('back');
  } catch (err) {
    console.error("Error in deleting the contact", err);
    res.status(500).send("Internal Server Error");
  }
});
app.listen(port, (err) => {
  if (err) {
    console.error('Error occurred:', err);
  } else {
    console.log('Server is listening on port:', port);
  }
});
