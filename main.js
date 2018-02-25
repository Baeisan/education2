import express from 'express';
import path from 'path';
const app = express();

import bodyParser from 'body-parser';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
import mongoose from 'mongoose';
mongoose.connect('mongodb://sss:1111@ds123946.mlab.com:23946/san', { useMongoClient : true });
mongoose.promise = global.Promise;

app.use(express.static(__dirname + '/../public'));

import routes from './routes';
app.use('/api', routes);

app.all('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../public/index.html'));
});


app.listen(3000);
