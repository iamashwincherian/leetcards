import { ProblemType } from "@/types/problem";

const problems: ProblemType[] = [
  {
    id: 217,
    title: "Contains Duplicate",
    description:
      "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    examples: [
      { input: "[1, 2, 3, 1]", output: "true" },
      { input: "[1, 2, 3, 4]", output: "false" },
    ],
    notes: "Now you know how to do it",
    solution: `class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        num_map = set()

        for num in nums:
            if num in num_map:
                return True
            num_map.add(num)

        return False`,
  },
  {
    id: 268,
    title: "Missing Number",
    description:
      "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
    examples: [
      { input: "[3, 0, 1]", output: "2" },
      { input: "[0, 1]", output: "2" },
    ],
    notes: "This is how it should be done",
    solution: `class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        for i in range(len(nums) + 1):
            if i not in nums:
                return i`,
  },
];

export default problems;
