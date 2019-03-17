const express = require('express');
const app = express();
const model=require('./models.js');
const controller = require('./controller.js');

app.use(express.urlencoded());
app.use(express.json());

app.post()

app.post("/registerUser", (req, res)=>{
    let user = req.body.user;
    controller.addUserToDatabase(user);
    res.send("");

})

app.post("/addNewRequirement", (req, res)=>{
    if(req.user)
    {
        let requirement = req.body.requirement;
        controller.addNewRequirement(req.user, requirement);
    }

})

app.post("/addBidToRequirement", (req, res)=>{
        if(req.user)
        {
            let bid = req.body.bid;
            controller.addBidToRequirement(req.user, bid);
        }

        else{
            //send unsuccessful
        }
})





app.post("/addReview", (req, res)=>{
    if(req.user)
    {
        let review = req.body.review;
        controller.addReview(user, review);
    }

    else{
        //send unsuccessful
    }
})

app.post("/addProduct", (req, res)=>{
    if(req.user&&req.user.type=="Vendor")
    {
        let product = req.body.product;
        controller.addProduct(req.user, product);
    }

    else{

    }
})

app.listen(4000, ()=>{
    console.log("Listening");

})