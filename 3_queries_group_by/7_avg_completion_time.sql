SELECT students.name AS student, AVG(assignment_submissions.duration) AS avg_assignment_duration
FROM students
JOIN assignment_submissions ON assignment_submissions.student_id = students.id
WHERE end_date IS null
GROUP BY student
ORDER BY avg_assignment_duration DESC;
