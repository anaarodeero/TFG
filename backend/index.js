var Koa = require('koa');
var Router = require('koa-router');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Dietario', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const userSchema = new mongoose.Schema({
  name: String
});

const User = mongoose.model('User', userSchema);

const silence = new User({ name: 'ana' });
const fluffy = new User({ name: 'fluffy' });
fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  
});

console.log(silence.name); // 'Silence'

var app = new Koa();
var router = new Router();

app.use(router.routes())
  .use(router.allowedMethods());


router.get('/registro', (ctx, next) => {
  ctx.body = 'Hello World!';
});

app.listen(3000);

//desde aqui inciamos la conex a la base de datos

//importamos las rutas

//