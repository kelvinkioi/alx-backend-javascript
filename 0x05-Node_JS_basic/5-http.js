const http = require('http');
const fs = require('fs');
const { argv } = require('process');

function countStudents(path, stream) {
  if (fs.existsSync(path)) {
    const data = fs.readFileSync(path, 'utf8');
    const result = [];
    data.split('\n').forEach((data) => {
      result.push(data.split(','));
    });
    result.shift();
    const newis = [];
    result.forEach((data) => newis.push([data[0], data[3]]));
    const fields = new Set();
    newis.forEach((item) => fields.add(item[1]));
    const final = {};
    fields.forEach((data) => { (final[data] = 0); });
    newis.forEach((data) => { (final[data[1]] += 1); });
    stream.write(`Number of students: ${result.length}\n`);
    const sSummary = [];
    Object.keys(final).forEach((data) => sSummary.push(`Number of students in ${data}: ${final[data]}. List: ${newis.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}\n`));
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < sSummary.length; i++) {
      if (i === sSummary.length - 1) {
        sSummary[i] = sSummary[i].replace(/(\r\n|\n|\r)/gm, '');
      }
      stream.write(sSummary[i]);
    }
  } else { throw new Error('Cannot load the database'); }
}

const hostname = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;
  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      countStudents(argv[2], res);
      res.end();
    } catch (err) {
      res.end(err.message);
    }
  }
});

app.listen(port, hostname);

module.exports = app;
