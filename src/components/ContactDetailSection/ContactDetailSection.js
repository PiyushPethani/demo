import { Icon } from "@iconify/react";
import React, { useState } from "react";
import SingleCallSection from "./SingleCallSection";

export default function ContactDetailSection() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <>
            <div className="border-t pr-2 py-4">
                <div>
                    <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1">
                        <input type="checkbox" className="sr-only" checked={isChecked} onChange={() => setIsChecked((prevState) => !prevState)} />
                        <span
                            className={`flex items-center space-x-[6px] rounded-full py-2 px-[18px] text-sm font-medium ${
                                !isChecked ? "text-primary bg-[#f4f7ff]" : "text-body-color"
                            }`}
                        >
                            <Icon icon="mdi:contact-outline" height={20} className="mx-2" />
                            Contact
                        </span>
                        <span
                            className={`flex items-center space-x-[6px] rounded-full py-2 px-[18px] text-sm font-medium ${
                                isChecked ? "text-primary bg-[#f4f7ff]" : "text-body-color"
                            }`}
                        >
                            <Icon icon="mynaui:telephone" height={20} className="mx-1" />
                            Number
                        </span>
                    </label>
                </div>
                <div>
                    <div className="hs-dropdown relative inline-flex m-2">
                        <button
                            id="hs-dropdown-default"
                            type="button"
                            className="open hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                        >
                            All
                            <svg
                                className="hs-dropdown-open:rotate-180 w-4 h-4 ml-10"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>
                    </div>
                    <div className="hs-dropdown relative inline-flex my-2">
                        <button
                            id="hs-dropdown-default"
                            type="button"
                            className="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                        >
                            Oldest
                            <svg
                                className="hs-dropdown-open:rotate-180 w-4 h-4 ml-10"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="m-2 mt-6">
                    {Array(13)
                        .fill()
                        .map((_, index) => (
                            <SingleCallSection key={index} />
                        ))}
                </div>
            </div>
        </>
    );
}
