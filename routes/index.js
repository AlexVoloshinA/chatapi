const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Message = mongoose.model("Message");
const validator = require('validator');
const {emailReqExp, textIsNotEmpty, textHasApproptiateLength} = require('../handlers/regexHelper');
const {catchErrors} = require('../handlers/errorHandler');

router.get("/list/:page",catchErrors( async (req, res) => {
  let paginate = 10; // Limit to show 10 messages on page
  let page = req.params.page || 0; // Default is 0
  
  const messages = await Message.find({})
    .skip(page  * paginate)  
    .limit(paginate);
  res.send(messages);
}));

router.get("/single/:id",catchErrors( async (req, res) => {
    // Find single message by it's ID
  const message = await Message.findById(req.params.id);
  res.send(message);
}));

router.post("/new", catchErrors( async (req, res) => {
    let errors = {};

    req.body.email = req.body.email.trim();
    req.body.text = req.body.text.trim();
    
    // Request validators
    // Check by using validator and by simple RegEx expression
    if(!validator.isEmail(req.body.email) || !emailReqExp(req.body.email)){
        errors['email'] = "Please enter an valid email";
    }

    // Check for not empty value and if the value is exist using function that uses RegEx's
    if(!textIsNotEmpty(req.body.text) || !textHasApproptiateLength(req.body.text)){
        errors['text'] = "You must provide not empty value limited to 100 chars";
    }
    
    if(Object.keys(errors).length > 0){
        res.status(400).send(errors);
    } else {
        const message = new Message(req.body);
        await message.save();
        res.send(message);
    }

}));

module.exports = router;
