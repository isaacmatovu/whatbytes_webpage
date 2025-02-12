"use client";

import { useSkillTest } from "@/context/SkillTestContext";

export function QuickStats() {
  const { skillTestData } = useSkillTest();

  return (
    <div className="mb-8  flex flex-col items-center md:items-start border-2 rounded mt-5">
      <h2 className="text-lg font-semibold mb-4 md:text-left">
        Quick Statistics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 bg-white rounded-lg">
        {/* Rank Stat */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/emoji/48/trophy-emoji.png"
              alt="trophy-emoji"
            />
          </div>
          <div>
            <div className="text-2xl font-bold">{skillTestData.rank}</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">
              Your Rank
            </div>
          </div>
        </div>

        {/* Percentile Stat */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/emoji/48/spiral-notepad-emoji.png"
              alt="spiral-notepad-emoji"
            />
          </div>
          <div>
            <div className="text-2xl font-bold">
              {skillTestData.percentile}%
            </div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">
              Percentile
            </div>
          </div>
        </div>

        {/* Correct Answers Stat */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png"
              alt="check-mark-button-emoji"
            />
          </div>
          <div>
            <div className="text-2xl font-bold">
              {skillTestData.score}/{skillTestData.total}
            </div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">
              Correct Answers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
