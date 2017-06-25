let jamData = require('../../../api/jam-data').jam;
const path = require('path');

module.exports = function (app) {

    // Gets
    app.get('/', (req, res) => {
        res.status(200).send('ok');
        return;
    });

    app.get('/index', (req, res) => {
        res.sendFile(path.join(__dirname + '/index.html'));
        return;
    });

    app.get('/showJam', (req, res) => {
        res.send(jamData);
        return;
    });

    // Posts
    app.post('/addJam', (req, res) => {
        let newJam = req.body.jam;

        if (newJam && isString(newJam)) {
            jamData.types.push(newJam);
            res.status(200).send('Added');
            return;
        }

        res.status(400).send('Bad Request');
        return;
    });
};

function isString(val) {
   return val.constructor === String;
}
