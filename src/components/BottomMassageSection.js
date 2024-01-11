import { Icon } from "@iconify/react";
import React from "react";

export default function BottomMassageSection() {
    return (
        <>
            <div className="absolute left-0 bottom-0 w-full bg-[#fbfbfb] border-t border-neutral-300 py-3">
                <div className="flex flex-row justify-between w-full items-center pr-5 pl-6 ">
                    <div className="flex flex-row items-center">
                        <span className="mr-10">
                            <Icon icon="solar:gallery-edit-linear" height={22} width={22} />
                        </span>

                        <Icon icon="fluent:emoji-20-regular" height={22} width={22} />

                        <input type="text" placeholder="Type a massage" className="ml-6 bg-[#fbfbfb]" />
                    </div>

                    <div className="flex flex-row items-center">
                        <span className="bg-neutral-200 rounded-full p-1.5">
                            <Icon icon="carbon:time" height={22} width={22} />
                        </span>

                        <span className="rounded-full bg-[#2f60f5] p-2 ml-5">
                            <Icon icon="carbon:send-filled" height={22} width={22} stroke="#FFF" className="text-white" />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
