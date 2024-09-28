const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 5001;

app.use(bodyParser.urlencoded({ extended: true }));

// Default login page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));  // Serve HTML directly
});

app.post('/login', (req, res) => {
    const users = {
        admin: { username: 'prakash', password: 'prakash123' },
        teacher: { username: 'teacher', password: 'teacher123' },
        student: { username: 'meet', password: 'meet123' }
    };

    const { username, password } = req.body;

    if (username === users.admin.username && password === users.admin.password) {
        res.sendFile(path.join(__dirname, 'views', 'admin.html'));
    } else if (username === users.teacher.username && password === users.teacher.password) {
        res.sendFile(path.join(__dirname, 'views', 'teacher.html'));
    } else if (username === users.student.username && password === users.student.password) {
        res.sendFile(path.join(__dirname, 'views', 'student.html'));
    } else {
        // Redirect back to login with an error message in the query string
        res.redirect('/?error=Invalid%20Credentials');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
