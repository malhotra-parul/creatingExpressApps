const express = require('express');

const auth = (req, res, next) => {
    console.log("You are authenticated to enter!");
    next();
}

module.exports = auth;
