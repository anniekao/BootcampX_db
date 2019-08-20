const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: 123,
  host: 'localhost',
  database: 'bootcampx'
});

const args = process.argv.slice(2);
const month = args[0];
const limit = args[1];

pool.query(`
  SELECT cohorts.name as cohort, students.name as student, students.id as student_id
  FROM students
  JOIN cohorts ON cohorts.id = students.cohort_id
  WHERE cohorts.name LIKE '%${month}%'
  LIMIT ${limit || 5};
`)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.student} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
    });
  })
  .catch(err => console.error('query error', err.stack));