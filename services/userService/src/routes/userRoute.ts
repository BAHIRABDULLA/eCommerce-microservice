import express from 'express';
const router = express.Router();  

import userController from '../controller/userController';
const { userSignin, userSignup } = userController;

router.post('/signup', userSignup);  
router.post('/signin', userSignin); 


export default router;
