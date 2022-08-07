import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import validate from "./middleware/validateResource";
import { createUserSchema } from "./schema/user.schema";

function routes(app: Express) {
  app.get("/", (req: Request, res: Response) => {
    res.send("hope this is working");
  });

  app.post("/api/users", validate(createUserSchema), createUserHandler);
}

export default routes;
