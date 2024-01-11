import React from "react";
import CustomerDetailsSchedule from "./CustomerDetailsSchedule";
import { Icon } from "@iconify/react";

export default function CustomerDetailsSection() {
    const data = [
        { label: "Tags", value: "Customer", icon: "ic:outline-watch-later" },
        { label: "Phone Number", value: "38 044 1258 635", icon: "fluent:call-24-regular" },
        { label: "Email", value: "sheva@gmail.com", icon: "fluent:call-24-regular" },
        { label: "Address", value: "Ukraine", icon: "mdi:address-marker-outline" },
        { label: "Date of Birth", value: "Empty", icon: "material-symbols-light:date-range" },
        { label: "URL", value: "Empty", icon: "arcticons:url-checker" },
        { label: "Company", value: "Empty", icon: "mdi:company" },
    ];

    return (
        <>
            <div className="max-w-80">
                <div className="border-t px-4 py-6 w-full">
                    <div className="bg-[#e8edfd] rounded-2xl p-3 w-12 text-center font-semibold text-[#b28ef7]">YS</div>
                    <p className="font-bold py-2">Yehor Shevchuk</p>
                    <div className="flex items-center ">
                        <div className="bg-[#f5f5f5] rounded-2xl p-3 w-12 text-center font-semibold text-black mx-1">
                            <Icon icon="fluent:call-24-regular" height={22} />
                        </div>
                        <div className="bg-[#f5f5f5] rounded-2xl p-3 w-12 text-center font-semibold text-black mx-1">
                            <Icon icon="mynaui:message" height={22} />
                        </div>
                        <div className="bg-[#f5f5f5] rounded-2xl p-3 w-12 text-center font-semibold text-black mx-1">
                            <Icon icon="pepicons-pencil:dots-y" height={22} />
                        </div>
                    </div>
                </div>

                <span className="font-bold px-4">Schedule</span>

                <CustomerDetailsSchedule />

                <span className="font-bold px-4">Calls Details</span>

                <div className="p-2 mx-5 mb-2">
                    <div className="flex items-center justify-start my-3">
                        <Icon icon="fluent:call-24-regular" height={20} className="mx-2 text-gray-500" />
                        <span className="text-gray-500 text-sm font-semibold">Total Calls</span>
                        <span className="text-black font-bold pl-16 text-xs">12</span>
                    </div>
                    <div className="flex items-center justify-start my-3">
                        <Icon icon="ic:outline-watch-later" height={20} className="mx-2 text-gray-500" />
                        <span className="text-gray-500 text-sm font-semibold">Average Call Time</span>
                        <span className="text-black font-bold pl-4 text-xs">1:34</span>
                    </div>
                </div>

                <span className="font-bold px-4">Details</span>

                <div className="p-2 mx-5 mb-2">
                    {data.map((item, index) => (
                        <div key={index} className="flex items-center justify-between my-3 py-1">
                            <div className="flex">
                                <Icon icon={item.icon} height={20} className="mx-2 text-gray-500" />
                                <span className="text-gray-500 text-sm font-semibold">{item.label}</span>
                            </div>
                            <span className="text-black font-bold text-xs pr-3">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
