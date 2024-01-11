import { Icon } from "@iconify/react";
import React from "react";

export default function SingleCallDetailSection() {
    return (
        <>
            <div className="flex items-center justify-center">
                <div className="bg-[#7885c7] rounded-3xl w-3/4 my-2">
                    <div className="flex p-2">
                        <div className="bg-white rounded-2xl p-3 w-12 text-center font-semibold text-white">
                            <Icon icon="bi:telephone-forward" className="text-black" height={20} />
                        </div>
                        <div className="mx-4">
                            <p className="text-white text-ellipsis">Finished Call</p>
                            <p className="text-xs text-white">02:30</p>
                        </div>
                    </div>
                    <div className="flex p-3">
                        <div className="bg-white rounded-2xl text-ellipsis text-sm font-medium py-3 px-5 mx-2">Show Keypad input</div>
                        <div className="bg-white rounded-2xl text-ellipsis text-sm font-medium py-3 px-5 mx-2">Show Keypad input</div>
                    </div>
                    <p className="text-white text-sm px-3">Keypad input</p>
                    <div className="border rounded-xl m-5">
                        <div className="flex items-center justify-between p-5 ">
                            <div className="pr-4">
                                <div className="bg-white rounded-2xl p-3 w-12 text-center font-semibold text-black">1</div>
                            </div>
                            <p className="text-white text-base font-medium pr-6">Forward to internal Number</p>
                            <p className="text-gray-300">02:29 </p>
                        </div>
                        <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25" />
                        <div className="flex items-center justify-between p-5 ">
                            <div className="pr-4 bord">
                                <div className="bg-white rounded-2xl p-3 w-12 text-center font-semibold text-black">1</div>
                            </div>
                            <p className="text-white text-base font-medium pr-6">Forward to internal Number</p>
                            <p className="text-gray-300">02:29 </p>
                        </div>
                    </div>
                    <div className="px-3">
                        <p className="text-gray-300">Speech-to-text</p>
                        <p className="text-lg  text-white py-2">
                            Welcom to our Design Studio support line. For design inquiries or to shedule a consultation, press 1 for techincal support or assistance with our design
                            tools, press 2 for building inquiries or to update your payment information, press 3 thank you for calling our studio support line
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-300 px-3">recording</p>
                        <div className="bg-white rounded-2xl text-ellipsis text-sm font-medium py-4 px-5 m-4">
                            <div className="pr-4 flex items-center justify-evenly">
                                <div className="bg-[#2f60f5] rounded-2xl p-3 w-12 mx-3 text-center font-semibold text-white ">
                                    <Icon icon="gravity-ui:play" height={22} />
                                </div>
                                <div className="h-1 w-full bg-gray-300 ">
                                    <div className="h-1 bg-primary" style={{ width: "30%" }}></div>
                                </div>
                                <p className="mx-4 font-semibold">02:30</p>
                                <Icon icon="pepicons-print:dots-y" height={55} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
