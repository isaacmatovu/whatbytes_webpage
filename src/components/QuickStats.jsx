"use client";

import { Trophy, FileText, CheckCircle } from "lucide-react";
import { useSkillTest } from "@/context/SkillTestContext";

export function QuickStats() {
  const { skillTestData } = useSkillTest();

  return (
    <div className="mx-auto max-w-4xl mb-8 grid grid-cols-1 gap-4 rounded-lg border p-4 sm:grid-cols-2 lg:grid-cols-3">
      {/* Rank */}
      <div className="flex items-center gap-3">
        <Trophy className="h-6 w-6 text-yellow-500 sm:h-8 sm:w-8" />
        <div>
          <div className="text-xl font-bold sm:text-2xl">
            {skillTestData.rank}
          </div>
          <div className="text-sm text-gray-500">YOUR RANK</div>
        </div>
      </div>

      {/* Percentile */}
      <div className="flex items-center gap-3">
        <FileText className="h-6 w-6 text-blue-500 sm:h-8 sm:w-8" />
        <div>
          <div className="text-xl font-bold sm:text-2xl">
            {skillTestData.percentile}%
          </div>
          <div className="text-sm text-gray-500">PERCENTILE</div>
        </div>
      </div>

      {/* Correct Answers */}
      <div className="flex items-center gap-3">
        <CheckCircle className="h-6 w-6 text-green-500 sm:h-8 sm:w-8" />
        <div>
          <div className="text-xl font-bold sm:text-2xl">
            {skillTestData.score}/{skillTestData.total}
          </div>
          <div className="text-sm text-gray-500">CORRECT ANSWERS</div>
        </div>
      </div>
    </div>
  );
}
