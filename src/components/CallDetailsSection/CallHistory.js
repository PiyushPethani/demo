import { Icon } from "@iconify/react";
import React from "react";

export default function CallHistory() {
    return (
        <>
            <div className="text-center">Today</div>
            <div>
                <div className="flex items-center justify-start mx-2">
                    <div className="bg-[#e8edfd] rounded-full p-3 w-12 text-center font-semibold text-[#b28ef7]">SK</div>
                    <span className="font-semibold px-3">Savytoslav khomeleo </span>
                    <span className="text-sm">7:12 pm </span>
                </div>
                <div className="flex items-center justify-start border rounded-2xl p-4 m-4 mx-12">
                    <div className="bg-gray-200 rounded-2xl p-3 text-center font-semibold text-white">
                        <Icon className="text-black" icon="tdesign:call-off" height={22} />
                    </div>
                    <div className="mx-4">
                        <div className="font-semibold">Unanswered Call</div>
                        <div className="text-gray-400">Problem with connection</div>
                    </div>
                </div>
                <div className="flex items-start justify-start border rounded-2xl p-4 m-4 mx-12">
                    <div className="bg-gray-200 rounded-2xl p-3 text-center font-semibold text-white">
                        <Icon className="text-black" icon="simple-line-icons:call-in" height={22} />
                    </div>
                    <div className="mx-4">
                        <div className="font-semibold">Finished Call</div>
                        <div className="text-gray-400">02:30</div>
                        <div className="flex py-3 relative right-10">
                            <div className="bg-gray-200 rounded-2xl text-ellipsis text-sm font-medium py-3 px-5 mx-2">Show Keypad input</div>
                            <div className="bg-gray-200 rounded-2xl text-ellipsis text-sm font-medium py-3 px-5 mx-2">Show Keypad input</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
