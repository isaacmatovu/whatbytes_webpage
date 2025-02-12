const syllabusData = [
  {
    topic: "HTML Tools, Forms, History",
    progress: 80,
    progressColor: "bg-blue-500",
    textColor: "text-blue-500",
  },
  {
    topic: "Tags & References in HTML",
    progress: 60,
    progressColor: "bg-orange-500",
    textColor: "text-orange-500",
  },
  {
    topic: "Tables & References in HTML",
    progress: 24,
    progressColor: "bg-red-400",
    textColor: "text-red-400",
  },
  {
    topic: "Tables & CSS Basics",
    progress: 96,
    progressColor: "bg-green-500",
    textColor: "text-green-500",
  },
];

export function SyllabusAnalysis() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-6">Syllabus Wise Analysis</h2>
      <div className="space-y-5">
        {syllabusData.map((item) => (
          <div key={item.topic} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[15px] text-gray-600 font-semibold">
                {item.topic}
              </span>
              <span className={`text-[15px] font-bold ${item.textColor}`}>
                {item.progress}%
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-100">
              <div
                className={`h-full rounded-full transition-all duration-500 ${item.progressColor}`}
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
