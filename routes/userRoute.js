import express from 'express';
import { getAllUsers } from '../controller/userController.js';

const router = express.Router();

router.route('/').get(getAllUsers);

export default router;
