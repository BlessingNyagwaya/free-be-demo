const path = require("path");
const express = require(path.resolve('./') + "/node_modules/express");
const router = express.Router();
const cors = require('cors');

//Middleware
app.use(express.static('public'));
app.use(cors());
app.use(express.json());

router.get('', async (req, res, next) => {
    res.addData(`From the root api: ${router.mdl.t('hello')}!`);

    return next();
})

router.get('/name', async (req, res) => {
    res.endWithData(`Hi, my name is ${router.Config('name')}`);

    return;
})

module.exports = router;
