import express from 'express';
import userCntrl from '../controller/user.controller';

const router = express.Router();

router.get('/register', userCntrl);

export { router };