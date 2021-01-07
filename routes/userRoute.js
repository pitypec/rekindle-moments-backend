import express from 'express';
import passport from 'passport';
import expressRouter from 'express-promise-router';
import passportconf from '../middleware/passport.js';

import {
  getAllUsers,
  seed,
  signIn,
  signUp
} from '../controller/userController.js';
import {
  signInSchema,
  validateBody,
  signUpSchema
} from '../middleware/validate.js';

const router = expressRouter();

router.get('/seed', seed);
router.route('/').get(getAllUsers);
router
  .route('/signin')
  .post(
    validateBody(signInSchema),
    passport.authenticate('local', { session: false }),
    signIn
  );
router.route('/signup').post(validateBody(signUpSchema), signUp);

export default router;
