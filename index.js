const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const uri =
  'mongodb+srv://seher:seher123@cluster0.3lcq5.gcp.mongodb.net/mht?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connected');
});

const gradesRouter = require('./routes/grades');
const subjectRouter = require('./routes/subjects');
const sllabysRouter = require('./routes/sllabys');
const schoolRouter = require('./routes/schools');
const teacherRouter = require('./routes/teachers');
const teacherBatchRouter = require('./routes/teacherBatch');
const BatchRouter = require('./routes/batch');
const StudentRouter = require('./routes/students');

app.use('/grades', gradesRouter);
app.use('/subjects', subjectRouter);
app.use('/sllabys', sllabysRouter);
app.use('/schools', schoolRouter);
app.use('/teachers', teacherRouter);
app.use('/teachersBatch', teacherBatchRouter);
app.use('/batchs', BatchRouter);
app.use('/students', StudentRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
