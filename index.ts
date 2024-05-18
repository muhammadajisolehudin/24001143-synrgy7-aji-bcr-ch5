// import express, { Express, Response, Request } from "express";
// import { Model, NotFoundError } from "objection";
// import Knex from "knex";
// import { CarsModel, Car } from "./src/models/car";

// const app: Express = express();
// const port = 3000;

// const knexInstance = Knex({
//   client: "pg",
//   connection: {
//     database: "ch5_bcr",
//     user: "postgres", 
//     password: "020402",
//   },
// });

// interface IParams {
//   id: string;
// }

// Model.knex(knexInstance);
// app.use(express.json());

// app.get("/", (_, res: Response) => {
//   res.send("Express + TypeScript Server");
// });

// app.get("/cars", async (_, res: Response) => {
//   try {
//     const cars = await CarsModel.query();
//     return res.json(cars);
//   } catch (err: any) {
//     res.status(500).json({ error: err.message });
//   }
// });


// app.post("/cars", async (req: Request<{}, {}, Car>, res: Response) => {
//   try {
//     const body = req.body;
//     const car = await CarsModel.query().insert(body).returning("*");
//     res.status(201).json(car);
//   } catch (err: any) {
//     res.status(400).json({ error: err.message });
//   }
// });



// app.listen(port, () => {
//   console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
// });
