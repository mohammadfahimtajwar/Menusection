var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var app = express();
var server = app.listen(3000);

app.use(express.static('website'));
console.log('Server is starting!');

app.get('/search/:id', searchId);
function searchId(request, response) {

    var criterion = request.params.id;

    db = new sqlite3.Database('menusection.sqlite3');
    db.serialize(function () {

        db.each(`SELECT id,menusection FROM menu WHERE id = ${criterion}`, function (err, row) {
            console.log(row.id, row.menusection)
        });
    });

    response.send('The search results (if any) have been displayed on the console!');
    db.close();

}

app.get('/all', sendAll);
function sendAll(request, response) {

    db = new sqlite3.Database('menusection.sqlite3');
    db.serialize(function () {

        db.each('SELECT id,menusection FROM menu', function (err, row) {
            console.log(row.id, row.menusection)
        });
    });

    response.send('The menu has been displayed on the console!');
    db.close();

}

app.get('/add/:id/:menusection', addMenusection);
function addMenusection(request, response) {

    var id = request.params.id;
    var menusection = request.params.menusection;

    db = new sqlite3.Database('menusection.sqlite3');
    db.serialize(function () {

        try{
            var add = db.prepare('INSERT INTO menu VALUES (?,?)');
            add.run(id, menusection);
            add.finalize();

            response.send('The menusection has been added successfully!')
        }
        catch (err) {
            response.send('The addition was not possible.')
        }
        finally {
            db.close()
        }
    })

}

app.get('/edit/:previous/:current', editMenusection);
function editMenusection(request, response) {

    var previous = request.params.previous;
    var current = request.params.current;

    db = new sqlite3.Database('menusection.sqlite3');
    db.run('UPDATE menu SET menusection = ? WHERE menusection = ?', `${current}`, `${previous}`);

    response.send('The update (if applicable) has been made successfully!');
    db.close();

}

app.get('/delete/:id', deleteMenusection);
function deleteMenusection(request, response) {

    var criterion = request.params.id;

    db = new sqlite3.Database('menusection.sqlite3');
    db.serialize(function () {

        try{
            var del = db.prepare('DELETE FROM menu WHERE id = ?');
            del.run(criterion);
            del.finalize();

            response.send('The menusection (if applicable) has been deleted successfully!')
        }
        catch (err) {
            response.send('The deletion was not possible.')
        }
        finally {
            db.close()
        }
    })

}