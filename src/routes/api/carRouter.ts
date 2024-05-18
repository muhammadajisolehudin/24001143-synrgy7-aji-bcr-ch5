import { Router } from 'express';
import { getCars, createCar } from '../../controllers/carsController';

const router = Router();

router.get('/cars', getCars);
router.post('/cars', createCar);

export default router;
