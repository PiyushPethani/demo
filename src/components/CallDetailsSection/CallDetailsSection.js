import React from "react";
import BottomMassageSection from "../BottomMassageSection";
import { Icon } from "@iconify/react";
import Image from "next/image";
import img from "/public/image/flag.png";
import SingleCallDetailSection from "./SingleCallDetailSection";
import CallHistory from "./CallHistory";

export default function CallDetailsSection() {
    return (
        <>
            <div className="border px-2 w-2/4 relative">
                <div>
                    <p className="text-xs font-normal text-center mt-2">20 March</p>
                    <p className="flex text-end text-xs font-normal items-center justify-end">
                        5:55 pm
                        <span className="font-semibold text-base px-2">Europe Support </span>
                        <Image src={img} alt="" className="h-10 w-10 rounded-full" />
                    </p>
                </div>

                <div>
                    <SingleCallDetailSection />
                    <CallHistory />
                </div>

                <BottomMassageSection />
            </div>
        </>
    );
}
