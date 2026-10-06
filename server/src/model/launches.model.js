const launches = new Map();
let latestFlightNumber = 100;
const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date("December 27, 2030"),
    target: 'Kepler 422-b',
    customer: ['a', 'b'],
    success: true,
    upcoming: true
}

launches.set(launch.flightNumber, launch);

function existsLaunchWithId(id) {
    return launches.has(id);
}

function getAllLaunches() {
    return Array.from(launches.values())
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(
        latestFlightNumber,
        Object.assign(launch, {
            flightNumber: latestFlightNumber,
            customer: ['a', 'b'],
            upcoming: true,
            success: true
        })
    );
}

function abortLaunch(id) {
    let aborted = launches.get(id);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    abortLaunch,
    existsLaunchWithId
}