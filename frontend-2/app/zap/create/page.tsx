"use client"

import Appbar from "@/components/Appbar";
import { PrimaryButton } from "@/components/Button/PrimaryButton";
import { ZapCell } from "@/components/ZapCell";
import { useState } from "react";


export default function Create() {
    const [selectedTrigger, setSelectedTrigger] = useState<string>("");
    const [selectedActions, setSelectedActions] = useState<{
        index:number;
        availableActionId: string;
        availableActionName: string
    }[]>([])

    return (
        <div>
            <Appbar />

            <div className="w-full min-h-screen bg-slate-200 flex flex-col justify-center  ">
                <div className="flex justify-center w-full">

                    <ZapCell name={selectedTrigger ? selectedTrigger : ".Trigger"} index={1} />
                </div>
                <div className=" w-full pt-2 pb-2">
                    {selectedActions.map((action, index) => 
                    <div key={index} className="flex justify-center"> 
                        <ZapCell  name={action.availableActionName ? action.availableActionName : ".Action"} index={action.index} />
                    </div>)}

                </div>
                <div className="flex justify-center">
                    <div >
                        <PrimaryButton onClick={() => {
                            setSelectedActions(a => [...a, {
                                index: a.length + 2,
                                availableActionId: "",
                                availableActionName: ""
                            }])
                        }}>
                            <div className="text-2xl">
                                +
                            </div>
                        </PrimaryButton>

                    </div>

                </div>
            </div>
        </div>
    )



}

