import express from 'express';
const applicationRouter = express.Router();
import { userRoutes } from "./user.routes";
import { taskRoutes } from "./task.routes";
import { auth } from "../helpers/auth";
import { readFile } from "fs/promises";
import { unknownRoute } from "../helpers/unknownRoutes";

applicationRouter.use('/user', userRoutes);
applicationRouter.use('/task', auth, taskRoutes);

applicationRouter.get('/', (req, res) => { readFile('./views/index.html', 'utf8').then((view) => res.send(view))});
applicationRouter.use(unknownRoute);

export { applicationRouter };