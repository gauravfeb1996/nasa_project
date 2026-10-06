const { 
    getAllLaunches,
    addNewLaunch,
    abortLaunch,
    existsLaunchWithId
} = require("../../model/launches.model");

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches())
}

function httpAddNewLaunch(req, res) {
    const launch = req.body;
    console.log(launch);
    if(!launch.mission || !launch.rocket || !launch.launchDate) {
        return res.status(400).json({
            error: "Data field is missing"
        })
    }
    launch.launchDate = new Date(launch.launchDate);
    if(launch.launchDate.toString() === "Invalid Date"){
        return res.status(400).json({
            error: "Inavlid date"
        })
    }
    addNewLaunch(launch);
    return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
    const id = Number(req.params.id);
    if(!existsLaunchWithId(id)) {
        return res.status(404).json({
            error: "Flight id does not exist"
        })
    }
    return res.status(200).json(abortLaunch(id))

}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch
}