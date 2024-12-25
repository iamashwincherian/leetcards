"use server";

import db from "./db";
import { Problem } from "@prisma/client";

export default async function addProblem(
  data: Pick<Problem, "title" | "description" | "number" | "solution" | "notes">
) {
  await db.problem.create({ data });
}
