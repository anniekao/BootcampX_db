
SELECT students.name AS name, COUNT(assistance_requests.*) AS total_requests
FROM students
JOIN assistance_requests ON   student_id = students.id
WHERE name = 'Elliot Dickinson'
GROUP BY name;