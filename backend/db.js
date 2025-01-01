const mongoose =  require("mongoose");

mongoose.connect("mongodb+srv://harsh:harsh1010@cluster0.mima1.mongodb.net/FOG-Battlefield4");

//Current Stats schema define and Create model
const currentstatsSchema = new mongoose.Schema({
    players: Number,
    totalPlayer: Number,
    ping: Number,
    tickrate: Number
})

const Currentstats = mongoose.model("currentstats", currentstatsSchema);

// Settings schema define and Create model
const settingsSchema = new mongoose.Schema({
    region: String,
    punkbuster: String,
    fairfight: String,
    password: String,
    preset: String
})

const Settings = mongoose.model("settings", settingsSchema);

// Advanced schema define and Create model
const advancedSchema = new mongoose.Schema({
    minimap: String,
    squad: String,
    vehicles: String,
    balance: String,
    minimapS: String,
    hud: String,
    vehicleCam: String,
    regenrate: String,
    killcam: String,
    friendly: String,
    spotting: String,
    enmy: String,
});

const Advanced = mongoose.model("advanced", advancedSchema);

// Rules schema define and create model
const rulesSchema = new mongoose.Schema({
    tickers: Number,
    vehicleS: Number,
    bullet: Number,
    kickT: Number,
    health: Number,
    respawn: Number,
    kickI: Number,
    ban: Number,
});

const Rules = mongoose.model("rules", rulesSchema);

// Export Models
module.exports = {
    Currentstats,
    Settings,
    Advanced,
    Rules,
};
