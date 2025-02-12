const syllabusData = [
  {
    topic: "HTML Tools, Forms, History",
    progress: 80,
    color: "bg-blue-500", // Blue
  },
  {
    topic: "Tags & References in HTML",
    progress: 60,
    color: "bg-orange-500", // Orange/Coral
  },
  {
    topic: "Tables & References in HTML",
    progress: 24,
    color: "bg-red-400", // Red/Pink
  },
  {
    topic: "Tables & CSS Basics",
    progress: 96,
    color: "bg-green-500", // Green
  },
]

export function SyllabusAnalysis() {
  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h3 className="mb-4 text-lg font-semibold">Syllabus Wise Analysis</h3>
      <div className="space-y-4">
        {syllabusData.map((item) => (
          <div key={item.topic}>
            <div className="mb-2 flex justify-between">
              <span className="text-sm text-gray-600">{item.topic}</span>
              <span className="text-sm font-medium text-gray-900">{item.progress}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-100">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${item.color}`}
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


  