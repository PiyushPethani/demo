import React from "react";

export default function SingleCallSection() {
    return (
        <>
            <div className="flex items-center justify-between my-4">
                <div className="bg-[#e8edfd] rounded-2xl p-3 w-12 text-center font-semibold text-[#b28ef7]">SK</div>
                <div>
                    <p className="text-sm font-semibold">Siko Koral</p>
                    <p className="text-sm font-medium text-gray-500">38 055486 25987 </p>
                </div>
                <div>
                    <p className="text-xs text-ellipsis font-medium">15 m ago</p>
                    <p className="text-blue-700 text-ellipsis text-xs font-semibold">03:32</p>
                </div>
            </div>
        </>
    );
}
