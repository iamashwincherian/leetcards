"use server";

import db from "./db";

export default async function getProblem() {
  return db.problem.findMany({});
}
