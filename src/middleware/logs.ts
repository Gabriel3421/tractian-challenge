import { Response, Request, NextFunction } from "express";

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  console.log(
    "Request logged:",
    "Method:",
    req.method,
    "Path:",
    req.path,
    "Query:",
    req.query,
    "Body:",
    req.body,
    "Params:",
    req.params
  );
  return next();
};
