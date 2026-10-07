const request = require("supertest");
const app = require("../../app");

describe('Testing the GET /launches API', () => {
    test('It should return 200 on success',async () => {
        const response = await request(app)
            .get("/launches")
            .expect(200);
    })
});

describe('Testing the POST /launches API', () => {
    const completeLaunchData = {
        mission: "Test test-1",
        rocket: "NCC 1701-D",
        target: "kepler 186-f",
        launchDate: "January 26, 2030"
    };

    const launchDataWithoutDate = {
        mission: "Test test-1",
        rocket: "NCC 1701-D",
        target: "kepler 186-f"
    };

    test('It should return 200 on success', async () => {
        const response = await request(app)
            .post('/launches')
            .send(completeLaunchData)
            .expect('Content-Type', /json/)
            .expect(201)

        const requestDate = new Date(completeLaunchData.launchDate).valueOf();
        const responseDate = new Date(response.body.launchDate).valueOf();
        expect(responseDate).toBe(requestDate);
  
        expect(response.body).toMatchObject(launchDataWithoutDate);
    })

    test("It should return 400 on value missing", async ()=> {
        const response = await request(app)
            .post('/launches')
            .send(launchDataWithoutDate)
            .expect('Content-Type', /json/)
            .expect(400)
    })
})

describe('Testing DELETE /launch API', () => {
    test("It should return 200 on success", async () => {
        const response = await request(app)
            .delete('/launches/100')
            .expect('Content-Type', /json/)
            .expect(200)
    })

    test("It should return 404 when data not found", async () => {
        const response = await request(app)
            .delete('/launches/400')
            .expect('Content-Type', /json/)
            .expect(404)

            expect(response.body).toStrictEqual({
                error: "Flight id does not exist"
            })
    })
})