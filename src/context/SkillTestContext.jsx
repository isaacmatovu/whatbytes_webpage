"use client"

import { createContext, useState, useContext } from "react"

const SkillTestContext = createContext()

export const useSkillTest = () => useContext(SkillTestContext)

export function SkillTestProvider({ children }) {
  const [skillTestData, setSkillTestData] = useState({
    rank: 1,
    percentile: 30,
    score: 10,
    total: 15,
  })

  const updateSkillTestData = (newData) => {
    setSkillTestData((prevData) => ({ ...prevData, ...newData }))
  }

  return (
    <SkillTestContext.Provider value={{ skillTestData, updateSkillTestData }}>{children}</SkillTestContext.Provider>
  )
}

