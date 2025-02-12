import { SkillTestProvider } from "@/context/SkillTestContext"
import { Sidebar } from "@/components/SideBar"
import { Header } from "@/components/Header"
import { TestDetails } from "@/components/TestDetails"
import { QuickStats } from "@/components/QuickStats"
import { ComparisonGraph } from "@/components/ComparisonGraph"
import { SyllabusAnalysis } from "@/components/SyllabusAnalysis"
import { QuestionAnalysis } from "@/components/QuestionAnalysis"

export default function SkillTest() {
  return (
    <SkillTestProvider>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 ml-16 sm:ml-48 lg:ml-64">
          <Header />

          <main className="p-4 sm:p-6">
            <h1 className="mb-4 sm:mb-6 text-lg sm:text-xl font-semibold text-gray-800">
              Skill Test
            </h1>

            <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="rounded-lg bg-white p-4 sm:p-6 shadow">
                  <TestDetails />
                  <QuickStats />
                  <ComparisonGraph />
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <SyllabusAnalysis />
                <QuestionAnalysis />
              </div>
            </div>
          </main>
        </div>
      </div>
    </SkillTestProvider>
  )
}