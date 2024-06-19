const fs = require('fs');

function countStudents(path) {
  try {
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
    const Final = {};
    fields.forEach((data) => { (Final[data] = 0); });
    newis.forEach((data) => { (Final[data[1]] += 1); });
    console.log(`number of students: ${result.filter((check) => check.length > 3).length}`);
    Object.keys(Final).forEach((data) => console.log(`number of students in ${data}: ${Final[data]}. List: ${newis.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}`));
  } catch (E) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
