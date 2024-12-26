"use client";

import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneLight,
  tomorrowNightBright,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { Problem as ProblemType } from "@prisma/client";
import { useTheme } from "next-themes";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Problem({ problem }: { problem: ProblemType }) {
  const { number, title, description, notes, solution } = problem;
  const { theme } = useTheme();
  const [showCode, setShowCode] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  useEffect(() => {
    setShowCode(false);
    setShowNotes(false);
  }, [number]);

  return (
    <Card className="">
      <CardHeader className="pb-0">
        <CardTitle>
          {number}. {title}
        </CardTitle>
        <CardDescription className="whitespace-pre-line">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mt-3">
          {showNotes ? (
            <>
              {!showCode && (
                <Button className="mb-3" onClick={() => setShowCode(true)}>
                  Show Code
                </Button>
              )}
              <div className="border w-full rounded-md p-2">
                <code className="text-sm whitespace-pre-line">{notes}</code>
              </div>
              {showCode && (
                <div className="border w-full rounded-md mt-4">
                  <SyntaxHighlighter
                    customStyle={{
                      fontSize: 13,
                      padding: 15,
                    }}
                    language="python"
                    style={
                      theme === "light" ? atomOneLight : tomorrowNightBright
                    }
                  >
                    {solution}
                  </SyntaxHighlighter>
                </div>
              )}
            </>
          ) : (
            <Button className="" onClick={() => setShowNotes(true)}>
              Show Notes
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
