import { Request, Response, ErrorRequestHandler } from "express";
import { CreateUserInput } from "../schema/user.schema";
import { createUser } from "../service/user.service";
import log from "../utils/logger";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    return user;
  } catch (error) {
    log.error(error);
    return res.status(409).send(error);
  }
}
