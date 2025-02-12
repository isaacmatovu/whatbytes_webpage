"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import img3 from "../images/html5.png"
import { useSkillTest } from "@/context/SkillTestContext"

export function UpdateModal({ isOpen, onClose }) {
  const { skillTestData, updateSkillTestData } = useSkillTest()
  const [formData, setFormData] = useState({
    rank: skillTestData.rank.toString(),
    percentile: skillTestData.percentile.toString(),
    score: skillTestData.score.toString(),
  })

  const [errors, setErrors] = useState({
    rank: "",
    percentile: "",
    score: "",
  })

  if (!isOpen) return null

  const validateField = (name, value) => {
    // Empty field validation with specific messages
    if (!value) {
      switch (name) {
        case "rank":
          return "required | should be number"
        case "percentile":
          return "required | percentile 0-100"
        case "score":
          return "required | score 1-15"
        default:
          return "required"
      }
    }

    const numValue = Number(value)
    if (isNaN(numValue)) {
      return "should be number"
    }

    switch (name) {
      case "rank":
        if (numValue < 1) {
          return "rank should be greater than 0"
        }
        break
      case "percentile":
        if (numValue < 0 || numValue > 100) {
          return "percentile should be between 0 and 100"
        }
        break
      case "score":
        if (numValue < 1 || numValue > 15) {
          return "score should be between 1 and 15"
        }
        break
    }
    return ""
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate all fields
    const newErrors = {
      rank: validateField("rank", formData.rank),
      percentile: validateField("percentile", formData.percentile),
      score: validateField("score", formData.score),
    }

    setErrors(newErrors)

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error)) {
      return
    }

    // If no errors, update the data
    updateSkillTestData({
      rank: Number.parseInt(formData.rank),
      percentile: Number.parseInt(formData.percentile),
      score: Number.parseInt(formData.score),
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-3/4 max-w-[700px] p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Update scores</h2>
          <Image src={img3 || "/placeholder.svg"} alt="HTML5 Logo" width={30} height={30} />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4 justify-between">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 p-1 rounded-full bg-blue-600 text-white text-sm">
                  1
                </span>
                <label htmlFor="rank" className="font-medium">
                  Update your <span className="font-bold">Rank</span>
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="rank"
                  name="rank"
                  value={formData.rank}
                  onChange={handleChange}
                  className={`border rounded px-3 py-1.5 w-13 ${errors.rank ? "border-red-500" : "border-blue-700"}`}
                />
                {errors.rank && <p className="text-red-500 text-xs mt-1">{errors.rank}</p>}
              </div>
            </div>

            <div className="flex items-center gap-4 justify-between">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 p-1 rounded-full bg-blue-600 text-white text-sm">
                  2
                </span>
                <label htmlFor="percentile" className="font-medium">
                  Update your <span className="font-bold">Percentile</span>
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="percentile"
                  name="percentile"
                  value={formData.percentile}
                  onChange={handleChange}
                  className={`border rounded px-3 py-1.5 w-13 ${
                    errors.percentile ? "border-red-500" : "border-blue-700"
                  }`}
                />
                {errors.percentile && <p className="text-red-500 text-xs mt-1">{errors.percentile}</p>}
              </div>
            </div>

            <div className="flex items-center gap-4 justify-between">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 p-1 rounded-full bg-blue-600 text-white text-sm">
                  3
                </span>
                <label htmlFor="score" className="font-medium">
                  Update your <span className="font-bold">Current Score (out of 15)</span>
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="score"
                  name="score"
                  value={formData.score}
                  onChange={handleChange}
                  className={`border rounded px-3 py-1.5 w-13 ${errors.score ? "border-red-500" : "border-blue-700"}`}
                />
                {errors.score && <p className="text-red-500 text-xs mt-1">{errors.score}</p>}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-blue-900 rounded hover:bg-gray-50"
            >
              <p className="text-blue-950 font-bold">cancel</p>
            </button>
            <button
              type="submit"
              className="px-12 py-4 bg-blue-900 border-2 border-black text-white rounded hover:bg-blue-700 flex items-center gap-2"
            >
              save
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

