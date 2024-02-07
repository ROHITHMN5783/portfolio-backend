const mongoose=require('mongoose')

const ContactModel=require('../controllers/contactcontroller')

const express=require('express')
const sendcontact = require('../controllers/contactcontroller')
const router=express.Router()

router.route('/newcontact').post(sendcontact)

module.exports=router

