const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: 123,
  host: 'localhost',
  database: 'bootcampx'
});

// parameterized data
const args = process.argv.slice(2);
const cohort = args[0] || 'JUL02';
const limit = args[1] || 5;
const values = [`%${cohort}%`, limit];


const queryString = (`
  SELECT cohorts.name as cohort, students.name as student, students.id as student_id
  FROM students
  JOIN cohorts ON cohorts.id = students.cohort_id
  WHERE cohorts.name LIKE $1
  LIMIT $2;
`);

pool
  .query(queryString, values)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.student} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
    });
  })
  .catch(err => console.error('query error', err.stack));