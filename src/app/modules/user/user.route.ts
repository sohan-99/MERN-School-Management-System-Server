import express from 'express';

const router = express.Router();

router.post('/create-user', UserController.createUser);

export const UserRoute = router;
