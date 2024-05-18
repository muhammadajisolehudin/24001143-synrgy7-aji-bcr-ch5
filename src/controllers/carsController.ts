import { Request, Response } from 'express';
import { CarsModel, Car } from '../models/car';

export const getCars = async (_: Request, res: Response) => {
  try {
    const cars = await CarsModel.query();
    return res.json(cars);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const createCar = async (req: Request<{}, {}, Car>, res: Response) => {
  try {
    const body = req.body;
    const car = await CarsModel.query().insert(body).returning('*');
    res.status(201).json(car);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
