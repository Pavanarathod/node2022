import { DocumentDefinition } from "mongoose";
import UserModel, { UserDocument } from "../models/user.model";

export const createUser = async function (
  input: DocumentDefinition<
    Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
  >
) {
  try {
    return await UserModel.create(input);
  } catch (error: any) {}
};
