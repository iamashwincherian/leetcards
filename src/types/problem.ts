export interface ProblemType {
  id: number;
  title: string;
  description: string;
  solution: string;
  notes: string;
  examples: { input: string; output: string }[];
}
