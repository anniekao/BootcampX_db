const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: 123,
  host: 'localhost',
  database: 'bootcampx'
});

const args = process.argv.slice(2);
const cohort = args[0];

pool.query(`
  SELECT DISTINCT cohorts.name as cohort, teachers.name as teacher
  FROM teachers
  JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
  JOIN students ON students.id = assistance_requests.student_id
  JOIN cohorts ON cohorts.id = students.cohort_id
  WHERE cohorts.name = '${cohort || 'JUL02'}'
  ORDER BY teacher
`)
  .then(res => {
    res.forEach(row => {
      console.log(`${row.cohort}: ${row.teacher}`);
    });
  })
  .catch(err => console.error(err));