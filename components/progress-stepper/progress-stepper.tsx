"use client";
import { useAppContext } from "@/contexts/context";
import React from "react";
import { LuChurch } from "react-icons/lu";

const ProgressStepper = () => {
  const { activeTab, personal, church, cont } = useAppContext();
  return (
    <ol className="flex items-center w-full px-3 mb-4 sm:mb-5">
      <li
        className={`flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block  ${
          personal
            ? "after:border-gray-100 dark:after:border-gray-700"
            : "after:border-blue-600 dark:after:border-blue-800"
        }`}>
        <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
          {activeTab === "personal" ? (
            <svg
              className="w-4 h-4 text-blue-100 lg:w-6 lg:h-6 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16">
              <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
            </svg>
          ) : (
            <svg
              className="w-3.5 h-3.5 text-blue-100 lg:w-4 lg:h-4 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          )}
        </div>
      </li>
      <li
        className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block ${
          church || personal
            ? "after:border-gray-100 dark:after:border-gray-700"
            : "after:border-blue-600 dark:after:border-blue-800"
        }`}>
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${
            activeTab === "church" || cont >= 2
              ? "bg-blue-600 dark:bg-blue-800"
              : "bg-gray-100 dark:bg-gray-700"
          }`}>
          {activeTab === "finished" ? (
            <svg
              className="w-3.5 h-3.5 text-blue-100 lg:w-4 lg:h-4 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          ) : (
            <LuChurch
              className={`w-4 h-4 lg:w-6 lg:h-6 dark:text-blue-300 ${
                activeTab === "church" ? "text-blue-100" : "text-blue-600"
              }`}
            />
          )}
        </div>
      </li>
      <li className="flex items-center">
        <div
          className={`flex items-center justify-center w-10 h-10  rounded-full lg:h-12 lg:w-12 shrink-0 ${
            activeTab === "finished"
              ? "bg-blue-600 dark:bg-blue-800"
              : "bg-gray-100 dark:bg-gray-700"
          }`}>
          <svg
            className={`w-4 h-4 lg:w-6 lg:h-6 dark:text-blue-300 ${
              activeTab === "finished" ? "text-blue-100" : "text-blue-600"
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20">
            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
          </svg>
        </div>
      </li>
    </ol>
  );
};

export default ProgressStepper;
