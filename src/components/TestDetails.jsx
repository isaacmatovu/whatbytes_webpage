"use client";
import { useState } from "react";
import Image from "next/image";
import img2 from "../images/html5.png";
import { UpdateModal } from "./UpdateModal";

export function TestDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-full rounded-lg border bg-white p-3 shadow-sm transition-all md:p-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Left Section: Image and Text */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center">
            <div className="flex-shrink-0">
              <Image
                src={img2}
                alt="HTML5 Logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-md object-contain"
              />
            </div>
            <div className="min-w-0 flex-1 text-center sm:text-left">
              <h2 className="truncate text-base font-semibold text-gray-900 md:text-lg">
                Hyper Text Markup Language
              </h2>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
              </p>
            </div>
          </div>

          {/* Right Section: Update Button */}
          <div className="flex-shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto md:text-base"
            >
              Update
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <UpdateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}