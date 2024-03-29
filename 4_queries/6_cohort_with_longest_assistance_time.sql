SELECT cohorts.name as name, AVG(completed_at - started_at) as avg_assistance_time 
FROM assistance_requests
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = students.cohort_id
GROUP BY cohorts.name 
ORDER BY avg_assistance_time DESC 
LIMIT 1;