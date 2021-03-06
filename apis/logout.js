const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");

router
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(cookieParser());

router
    .route("/")
    .post((req, res) => {
        console.log("\n    logout post request    \n");
        res.clearCookie("email");
        res.clearCookie("token");
        // res.clearCookie("name");
        console.log("\n\t cleared cookies");
        res.end();
    })

module.exports = router;