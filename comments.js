// Create web server
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Comment = require('../models/Comment.js');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// GET comments
router.get('/', function(req, res, next) {
    Comment.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

// GET comments

