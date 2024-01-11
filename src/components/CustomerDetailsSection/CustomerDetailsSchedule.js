import { Icon } from "@iconify/react";
import React from "react";

const CustomerDetailsSchedule = () => {
    return (
        <>
            <div className="border rounded-lg py-4 px-2 mx-5 w-full mt-2 mb-3">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <div className="bg-[#f5f5f5] rounded-2xl p-2 text-center font-semibold text-black mx-1">
                            <Icon icon="mynaui:message" height={22} />
                        </div>
                        <span className="font-bold px-2">SMS</span>
                    </div>
                    <div className="bg-[#f5f5f5] rounded-2xl p-2 text-center font-semibold text-black mx-1">
                        <Icon icon="pepicons-pencil:dots-y" height={22} />
                    </div>
                </div>

                <span className="px-5">Dear [Client Name],</span>

                <p className="p-5">
                    We Hope this Message, finds you well. As we head into the spring season, we Wanted to share some of our latest projects and design in inspiration With you.
                </p>

                <div className="flex items-center justify-between px-4">
                    <Icon icon="material-symbols-light:date-range" height={22} />

                    <span className="font-semibold text-sm">March 09, 2023 11:00 AM</span>

                    <Icon icon="mingcute:right-line" height={22} />
                </div>
            </div>
        </>
    );
};

export default CustomerDetailsSchedule;
