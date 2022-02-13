const express=require('express');
const app=express();
var cors = require('cors');//cors to allow requests
 app.use(cors());
const chai = require('chai'); //assertion library to verify that things are correct
const chaiHttp = require('chai-http');//allows to make http request
const { expect } = require('chai');
const dotenv = require('dotenv').config();//to access .env data

chai.use(chaiHttp); 

//test case to check requested information received or not

describe('test 1', function() {
    var host ="http://" + process.env.IP + ':' + process.env.PORT;
    var path = "/";

    it('status code 200 on suceess of requested information', function(done) {
        chai.request(host)
            .get(path)
            // .field('myparam' , 'test')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({translateText: 'Hello world',translatefrom:'en',translateTo:'hi'})
            .end(function(error, response, body) {
                if (error) {
                    done(error);
                } else {
                    expect(response.statusCode).to.equal(200);
                    done();
                }
            });
    });
});

//test case to check the response upon providing invalid information

describe('test 2', function() {
    var host ="http://" + process.env.IP + ':' + process.env.PORT;
    var path = "/";

    it('status code 400 on providing invalid information while making request', function(done) {
        chai.request(host)
            .get(path)
            // .field('myparam' , 'test')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({translateText: 'Hello world',translateTo:'hi'})
            .end(function(error, response, body) {
                if (error) {
                    done(error);
                } else {
                    expect(response.statusCode).to.equal(400);
                    done();
                }
            });
    });
});