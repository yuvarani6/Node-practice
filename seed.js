const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://yuvakrish0624:N6jQXg3sK5Yveac7@cluster0.7fmsk.mongodb.net/mydatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => console.log(err));