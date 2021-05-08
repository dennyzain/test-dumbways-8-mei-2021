const mysql = require('mysql');

//connecting to db
const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

//view user

exports.view = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; // not connected!
        console.log(connection.state);

        // view users
        connection.query(
            'SELECT * FROM course_tb WHERE course_status = "active"',
            (err, rows) => {
                //jika udah selesai mengkoneksikan release it
                connection.release();
                if (err) throw err;
                res.render('crud_view', { rows });
                console.log(`data from course_tb ${rows}`);
            }
        );
    });
};

// find/search user

exports.find = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; // not connected!
        console.log(connection.state);

        let search = req.body.search;
        connection.query(
            `SELECT * FROM course_tb WHERE course_name LIKE ?`,
            [`%${search}%`],
            (err, rows) => {
                //jika udah selesai mengkoneksikan release it
                connection.release();
                // if (err) throw err;
                if (rows.length == 0) {
                    res.render('crud_view', {
                        errorM: true,
                        showError: `${search} not found !`,
                    });
                } else {
                    res.render('crud_view', { rows });
                }
            }
        );
        ``;
    });
};
