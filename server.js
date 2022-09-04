// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use((req, res, next) => {
  next();
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});



app.get('/unsupported', (req, res) => {
  res.render('unsupported', {
    LB_PUBLIC_PATH: sanitizeUrl(process.env['LB_PUBLIC_PATH']),
    CHROME_VERSION: dataCompConfig['Windows']['Chrome'].min,
    SAFARI_VERSION: dataCompConfig['Mac']['Safari'].min,
  });
});


const server = app.listen(8080, () => {
  console.log('server started on port 8080');
});

const closeGracefully = (signal) => {
  console.log(`*^!@4=> Received signal to terminate: ${signal}`);
  server.close();
  process.exit();
};
process.on('SIGINT', closeGracefully);
process.on('SIGTERM', closeGracefully);

process.on('uncaughtException', (err) => {
  // clean up allocated resources
  // log necessary error details to log files
  console.log(err.message);
  console.log(err.stack);
  process.exit(); // exit the process to avoid unknown state
});
