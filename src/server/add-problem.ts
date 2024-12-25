"use server";

import db from "./db";
import { Problem } from "@prisma/client";

export default async function addProblem(
  data: Pick<Problem, "title" | "description" | "number" | "solution" | "notes">
) {
  const existingProblem = await db.problem.findFirst({
    where: { number: data.number },
  });

  if (existingProblem) {
    return { error: "EXISTS", type: "number" };
  }
  await db.problem.create({ data });
}
