SELECT AVG(total_students) AS avg_students
FROM (
  SELECT COUNT(students) AS total_students
  FROM students
  JOIN cohorts ON cohorts.id = students.cohort_id
  GROUP BY cohorts
) AS totals_table;