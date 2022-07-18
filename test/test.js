var request = require("request")
var asset = require("assert")
var chai = require("chai")
const { assert } = require("console")
var base_url = "https://ssgsnodedemo234470.azurewebsites.net"

describe("Node Server", function() {
    describe("GET /", function () {
        it("returns status code 200", function(done) {
            request.get(base_url, function(error, response, body) {
                assert.equal(200, response.statusCode);
                done()
            })
        })
        it("returns Hello World", function(done) {
            request.get(base_url, function(error, response, body) {
                chai.assert.include(body, "Hello World");
                done();
            })
        })
    })
})