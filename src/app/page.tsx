"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LoaderCircle, RefreshCw } from "lucide-react";
import { Problem as ProblemType } from "@prisma/client";

import Problem from "@/app/components/problem";
import { Button } from "@/components/ui/button";
import getProblems from "@/server/get-problems";
import EmptyProblemCard from "./components/empty-problem-card";

export default function Home() {
  const [problem, setProblem] = useState<ProblemType | null>(null);
  const [status, setStatus] = useState<"success" | "pending" | null>(null);
  const router = useRouter();

  const getUniqueProblem = useCallback(async () => {
    setStatus("pending");
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
    setStatus("success");
  }, []);

  useEffect(() => {
    getUniqueProblem();
  }, [getUniqueProblem]);

  const redirectToAddPage = () => {
    router.push("/add");
  };

  return (
    <div className="flex flex-col justify-center items-center m-6">
      <div className="mt-3 w-full md:max-w-[500px]">
        {status === "pending" ? (
          <div className="flex gap-2 justify-center">
            Loading <LoaderCircle className="animate-spin" />
          </div>
        ) : (
          <>
            {problem && <Problem problem={problem} />}
            {status === "success" && !problem && <EmptyProblemCard />}
            {status && (
              <div className="flex flex-col items-center mt-6">
                {problem && (
                  <Button variant="outline" onClick={getUniqueProblem}>
                    <RefreshCw />
                    Randomize
                  </Button>
                )}
                <Button
                  onClick={redirectToAddPage}
                  variant={"ghost"}
                  className="text-sm underline mt-2"
                >
                  Add new problem
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
