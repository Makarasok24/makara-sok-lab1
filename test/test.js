import request from "supertest";
import { expect } from "chai";
import app from "../app.js";

describe("GET /", () => {
    it("should return Hello, CI/CD Pipline!", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).to.equal(200);
        expect(res.text).to.equal("Hello, CI/CD Pipline!");
    });
});

describe("GET /user/:id", () => {
    it("should return user data with ID", async () => {
        const res = await request(app).get("/user/123");
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.property("id", "123");
        expect(res.body).to.have.property("name", "User 123");
        expect(res.body).to.have.property("email", "user123@example.com");
    });

    it("should handle different user IDs", async () => {
        const res = await request(app).get("/user/456");
        expect(res.statusCode).to.equal(200);
        expect(res.body.id).to.equal("456");
        expect(res.body.name).to.equal("User 456");
    });
});

