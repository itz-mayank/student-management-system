const express = require('express');
const path = require('path');
const handlebars = require('handlebars');
const hbs = require('hbs');
const exphbs = require('express-handlebars');
const {
  allowInsecurePrototypeAccess,
} = require('@handlebars/allow-prototype-access');
const bodyparser = require('body-parser');

require('./models/db');
const Login = require("./models/login");
const studentController = require('./controllers/studentController');

const port = process.env.PORT || 8000;

const static_path = path.join(__dirname, "./public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

var app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get('/', (req,res) => {
  res.render("views/index")
});

app.get('/login', (req,res) => {
  res.render("login")
});

// app.get("/", (req, res) => {
//   res.send('<h2>Welcome to Student Dashboard!!</h2><h3>Click here to get access to the <b> <a href = "/login">Database</a></b></h3>');
// });

app.set('views', path.join(__dirname, '/templates/'));

app.engine(
  "hbs",
  exphbs({
  handlebars: allowInsecurePrototypeAccess(handlebars),
  extname: 'hbs',
  defaultLayout: 'MainLayout',
  layoutsDir: __dirname+ '/templates/views/layouts/',
  })
);


app.listen(port, () => {
  console.log('server started at port '+port);
});

app.use('/student', studentController);
