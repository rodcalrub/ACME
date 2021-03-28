const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TripSchema = require("./TripSchema").schema;
const systemParamsController = require("../routes/SystemParamsController");

const FinderSchema = new Schema({
    keyword: Schema.Types.String,
    minPrice: Schema.Types.Number,
    maxPrice: Schema.Types.Number,
    startDate: Schema.Types.Date,
    endDate: Schema.Types.Date,
    trips: {
        type: [TripSchema],
        default: undefined,
        expireAfterSeconds: Number,
    },
    actorID: Schema.Types.ObjectId
});

module.exports = mongoose.model("Finder", FinderSchema);
