"use client";

import { useCallback, useEffect, useState } from "react";
import Problem from "./components/problem";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { Problem as ProblemType } from "@prisma/client";
import getProblems from "@/server/get-problems";
import { useRouter } from "next/navigation";

export default function Home() {
  const [problem, setProblem] = useState<ProblemType | null>(null);
  const router = useRouter();

  const getUniqueProblem = useCallback(async () => {
    const latestProblems = await getProblems();
    setProblem((prevProblem) => {
      let newProblem;
      do {
        newProblem =
          latestProblems[Math.floor(Math.random() * latestProblems.length)];
      } while (
        prevProblem &&
        prevProblem.id === newProblem.id &&
        latestProblems.length > 1
      );
      return newProblem;
    });
  }, []);

  useEffect(() => {
    getUniqueProblem();
  }, [getUniqueProblem]);

  const redirectToAddPage = () => {
    router.push("/add");
  };

  return (
    <div className="flex flex-col justify-center items-center m-6">
      <p className="text-2xl font-semibold uppercase tracking-widest">
        Leetcards
      </p>

      <div className="mt-6 w-full md:max-w-[500px]">
        {problem && <Problem problem={problem} />}
        <div className="flex flex-col items-center mt-6">
          <Button variant="outline" onClick={getUniqueProblem}>
            <RefreshCw />
            Randomize
          </Button>
          <Button
            onClick={redirectToAddPage}
            variant={"ghost"}
            className="text-sm underline mt-2"
          >
            Add new problem
          </Button>
        </div>
      </div>
    </div>
  );
}
