const fs = require('fs');

async function countStudents (path) {
  if (fs.existsSync(path)) {
    return new Promise((resolve) => {
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          throw Error('Cannot load the database');
        }
        const result = [];
        data.split('\n').forEach((data) => {
          result.push(data.split(','));
        });
        result.shift();
        const sData = [];
        result.forEach((data) => sData.push([data[0], data[3]]));
        const fields = new Set();
        sData.forEach((item) => fields.add(item[1]));
        const final = {};
        fields.forEach((data) => { (final[data] = 0); });
        sData.forEach((data) => { (final[data[1]] += 1); });
        console.log(`Number of students: ${result.filter((check) => check.length > 3).length}`);
        Object.keys(final).forEach((data) => console.log(`Number of students in ${data}: ${final[data]}. List: ${sData.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}`));
        resolve(result, final, sData);
      });
    });
  }
  throw Error('Cannot load the database');
}

module.exports = countStudents;
