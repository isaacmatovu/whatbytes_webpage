"use client";

import { useSkillTest } from "@/context/SkillTestContext";

export function QuestionAnalysis() {
  const { skillTestData } = useSkillTest();
  const { score, total } = skillTestData;
  const percentage = (score / total) * 100;

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Question Analysis</h3>
        <span className="text-blue-600 font-bold">
          {score}/{total}
        </span>
      </div>

      <p className="text-gray-600 mb-6">
        You scored {score} question correct out of {total}. However it still
        needs some improvements
      </p>

      <div className="flex justify-center">
        <div className="relative w-48 h-48 p-2">
          {/* Background circle */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="88"
              cy="88"
              r="82"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="8"
            />
            {/* Progress circle */}
            <circle
              cx="88"
              cy="88"
              r="76"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="20"
              strokeDasharray={477}
              strokeDashoffset={477 - (477 * percentage) / 100}
              strokeLinecap="butt"
              transform="rotate(90 88 88)"
            />
          </svg>

          {/* Center target icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/emoji/48/bullseye.png"
              alt="bullseye"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
