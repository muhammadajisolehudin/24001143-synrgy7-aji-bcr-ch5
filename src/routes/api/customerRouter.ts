import { Router } from 'express';
import { getCustomers, createCustomer } from '../../controllers/customersController'

const router = Router();

router.get('/customers', getCustomers);
router.post('/customers', createCustomer);

export default router;
