import { Router } from 'express';
import { getCars, createCar, getCarsById } from '../../controllers/carsController';

const router = Router();

router.get('/cars', getCars);
router.get('/cars/:id', getCarsById)
router.post('/cars', createCar);


export default router;
