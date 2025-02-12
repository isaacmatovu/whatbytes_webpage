import Link from "next/link";
import { BarChart2, BookOpen, Briefcase } from "lucide-react";
import img3 from "../images/logo.jpg";
import Image from "next/image";

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen border-r bg-white p-2 sm:p-4 w-16 sm:w-48 lg:w-64">
      {/* Logo */}
      <div className="mb-8 flex items-center gap-2">
        <Image
          src={img3}
          alt="Logo"
          width={30}
          height={30}
          className="h-8 w-8"
        />
        <h1 className="hidden sm:block text-lg lg:text-2xl font-bold">WhatBytes</h1>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              href="#"
              className="flex items-center rounded p-2 hover:bg-gray-100"
            >
              <BarChart2 className="h-5 w-5" />
              <span className="hidden sm:block ml-2">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center rounded p-2 bg-blue-100 text-blue-600"
            >
              <BookOpen className="h-5 w-5" />
              <span className="hidden sm:block ml-2">Skill Test</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center rounded p-2 hover:bg-gray-100"
            >
              <Briefcase className="h-5 w-5" />
              <span className="hidden sm:block ml-2">Internship</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}