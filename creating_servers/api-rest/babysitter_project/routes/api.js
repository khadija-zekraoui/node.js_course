const express = require("express");
const Babysitter = require("../models/babysitter");
const router = express.Router();

//get a list of babysitter from database
//url parameters
router.get("/babysitters", (req, res, next) => {
    //geoNear is going to look for coordinates which near to the ones provided
    Babysitter.aggregate([
        {
            $geoNear: {
                near: {
                    type: "Point",
                    coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
                },
                distanceField: "dist.calculated",
                maxDistance: 100000,
                spherical: true,
            },
        },
    ]).then((babysitter) => {
        res.send(babysitter);
    });
});

//add a new babysitter to the database
router.post("/babysitters", (req, res, next) => {
    /*var babysitter = new Babysitter(req.body);
    babysitter.save();*/
    // we can do this using the method create
    Babysitter.create(req.body)
        .then((babysitter) => {
            res.send(babysitter);
        })
        .catch(next);
});

//update a babysitter in tha database
//use of request parameter id
router.put("/babysitters/:id", (req, res, next) => {
    //For performance reasons, Mongoose won’t return the updated document so we need to pass an additional parameter to ask for it
    Babysitter.findByIdAndUpdate(
        {
            _id: req.params.id,
        },
        req.body,
        {
            // the add parameter.
            new: true,
        }
    ).then((babysitter) => res.send(babysitter));
});

//delete a babysitter from the database
//use of request parameter id
router.delete("/babysitters/:id", (req, res, next) => {
    console.log(req.params.id);
    //We will use the findByIdAndRemove call to delete a record. It returns the original document that was removed:
    Babysitter.findByIdAndRemove({ _id: req.params.id }).then((babysitter) => res.send(babysitter));
});

module.exports = router;
