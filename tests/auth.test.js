const request = require('supertest');
const express = require('express');
const app = require('../index');
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWJmOTlmOWJjZTU5NmZkY2FhZWNjYyIsImV4cCI6MTcwNTI5OTI2NiwiZGF0YSI6eyJlbWFpbCI6ImJvb21AZ21haWwuY29tIiwidXNlcklkIjoiNjU5YmY5OWY5YmNlNTk2ZmRjYWFlY2NjIn0sImlhdCI6MTcwNTI5NTY2Nn0.SJQIijDJzZAlfI4btJwoTW3TSrTqgycKG9_0UugtR25'

describe('call register api', function() {

    it('เช็ค register ใสข้อมูลน้อยกว่า 3 ตัว', async () => {
       request(app).post('/signin')
        .send({name: 'bo', password:'P@ssw0rd11'})
        .set('Accept', 'application/json')
        .expect(200)
        .then((res) => {
            expect(res.message).toBe("\"email\" must be a valid email");
        });
    });
    
    it('เช็ค register ใสข้อมูลน้อยกว่า 3 ตัว', async () => {
        request(app).post('/signin')
        .send({name: 'boom@gmail.com', password:'P@ssw0rd11'})
        .set('Accept', 'application/json')
        .expect(200)
        .then((res) => {
            expect(res.message).toBe("success");
        })
    });
    
    test('เช็ค register ไม่ใส่ email', async () => {
        request(app).post('/signin')
        .send({name: '', password:'P@ssw0rd11'})
        .set('Accept', 'application/json')
        .expect(200)
        .then((res) => {
            expect(res.message).toBe("\"email\" is not allowed to be empty");
        })
    });
    
    // it('เช็ค register ไม่ใส่ lastname', () => {
    //     expect(sum(1, 2)).toBe(3);
    // });
    
    // it('เช็ค register ไม่ใส่ email', () => {
    //     expect(sum(1, 2)).toBe(3);
    // });
    
    test('เช็ค register ไม่ใส่ password', async () => {
        request(app).post('/signin')
        .send({name: 'boom@gmail.com', password:''})
        .set('Accept', 'application/json')
        .expect(200)
        .then((res) => {
            expect(res.message).toBe("\"password\" is not allowed to be empty");
        })
    });
    
    // test('responds with json', function(done) {
    //  request(app).post('/signin')
    //     .send({name: 'boom@gmail.com', password:'P@ssw0rd11'})
    //     .set('Accept', 'application/json')
    //     .expect('Content-Type', /json/)
    //     .expect(500)
    //     .then((res) => {
    //         expect(res.data).toBe({
    //             firstName: "boom",
    //             lastName: "baam"
    //         });
    //     })
    // });

    // test('responds get all user', function() {
    //    request(app).get('/')
    //    .set('Authorization', token)
    //    .expect('Content-Type', /json/)
    //    .expect(400)
    //    .then((res) => {
    //        expect(res).toBe("Invalid Token");
    //    })
    // });
});