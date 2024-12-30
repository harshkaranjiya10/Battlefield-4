const express = require("express");
const router = express.Router();

// import models
const {Currentstats, Settings, Advanced, Rules} = require('../db');

// Current Stats POST request
router.post("/currentstats", async (req,res) => {
    try {
        const newCurrentStats = new Currentstats(req.body);
        await newCurrentStats.save();
    
        res.status(201).json({message: "Successfully", status: 201})
    }
    catch(error) {
        console.log(error);
        res.status(500).json({message: "Error"});   
    }
})

// Advanced POST request
router.post("/advanced", async (req,res) => {
    try {
        const newAdvanced = new Advanced(req.body);
        await newAdvanced.save();
    
        res.status(201).json({message: "Successfully", status: 201})
    }
    catch(error) {
        console.log(error);
        res.status(500).json({message: "Error"});   
    }
})

// Setting POST request
router.post("/settings", async (req,res) => {
    try {
        const newSettings = new Settings(req.body);
        await newSettings.save();
    
        res.status(201).json({message: "Successfully", status: 201})
    }
    catch(error) {
        console.log(error);
        res.status(500).json({message: "Error"});   
    }
})

// Rules POST request
router.post("/rules", async (req,res) => {
    try {
        const newRules = new Rules(req.body);
        await newRules.save();
    
        res.status(201).json({message: "Successfully", status: 201})
    }
    catch(error) {
        console.log(error);
        res.status(500).json({message: "Error"}); 
    }
})

// GET all the data from backend (stats, advanced, setting, rules)
router.get("/", async (req,res) => {
    try {
        const stats = await Currentstats.find({});
        const advanced = await Advanced.find({});
        const setting = await Settings.find({});
        const rules = await Rules.find({});
        const results = {stats, advanced, setting, rules}; 
        res.send(results).status(200);
    } catch(error) {
        res.status(500).json({message: "Error"}); 
    }
})

module.exports = router;