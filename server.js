const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();
const faker = require("faker");

app.use(express.json());//gives ability to work wih json

class User {
    constructor(){
        this._id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor(){
        this._id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country()
        };
    };
};


app.get("/api/users/new", (req,res) =>{
    const user1 = new User()
    console.log(user1)
    res.json(user1)
})

app.get("/api/companies/new", (req,res) =>{
    const company1 = new Company()
    console.log(company1)
    res.json(company1)
})

app.get("/api/user/company", (req,res) =>{
    const company1 = new Company()
    const user1 = new User()
    console.log(company1, user1)
    res.json({"company":company1, "user": user1})
})












app.listen(port, () => console.log(`Listening on port ${port}`));