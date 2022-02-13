const express=require('express');

const router=express.Router();

//get action method from controller 
const translateController=require('../controller/textTranslator_controller');

//router to call '/' request
router.get('/',translateController.translateText);

//export the router
module.exports=router;

