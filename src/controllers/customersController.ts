import { Request, Response } from 'express';
import { CustomerModel, Customer } from '../models/customer';

export const getCustomers = async (_: Request, res: Response) => {
  try {
    const cars = await CustomerModel.query();
    return res.json(cars);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const createCustomer = async (req: Request<{}, {}, Customer>, res: Response) => {
  try {
    const body = req.body;
    const car = await CustomerModel.query().insert(body).returning('*');
    res.status(201).json(car);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
