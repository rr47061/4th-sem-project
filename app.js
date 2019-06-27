var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var JSAlert = require("js-alert");
const flash = require('express-flash-notification');
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
// var indexRouter = require('./routes/index');
var indexRouter = require('./routes/index');
var productRouter = require('./routes/products');
var usersRouter = require('./routes/users');
var medRouter = require('./routes/medi');
var newsRouter = require('./routes/news');
var hospitalRouter = require('./routes/hospitals');
var mailRouter = require('./routes/sendmail');
var appointmentRouter = require('./routes/appointment');
var doctorpageRouter = require('./routes/doctor_page');
var appresRouter = require('./routes/appointment_result');
var ap_by_docRouter = require('./routes/appointment_by_doc');
var insuranceRouter = require('./routes/insurance');

// const flash = require('express-flash-notification');
// const flash = require('express-flash-notification');
// const session = require('express-session');
// const cookieParser = require('cookie-parser');

var app = express();
app.set('view engine', 'hbs');
// app.use(flash(app));
// app.use(session);
// app.set('view engine', 'html');
// app.engine('html', require('hbs').__express);



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/products', productRouter);
app.use('/users', usersRouter);
app.use('/medi', medRouter);
app.use('/news', newsRouter);
app.use('/hospitals', hospitalRouter);
// app.use('/sendmail', mailRouter);
app.use('/appointment', appointmentRouter);
app.use('/insurance', insuranceRouter);
app.use('/doctor_page', doctorpageRouter);
app.use('/appointment_result', appresRouter);
app.use('/appointment_by_doc', ap_by_docRouter);

module.exports = app;
