"use client"
import Appbar from "@/components/Appbar"
import { PrimaryButton } from "@/components/Button/PrimaryButton"
import { CheckFeature } from "@/components/CheckFeature"
import { Input } from "@/components/input"
import axios from "axios"
import { useState } from "react"
import { BACKEND_URL } from "../config"
import { useRouter } from "next/navigation"


const signup = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("")
    const router = useRouter();



    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="flex pt-8 max-w-4xl">
                    <div className="flex-1 pt-20 px-4">
                        <div className="font-semibold text-3xl  pb-4">
                            Join millions worldwide who automate their work using Zapier.
                        </div>

                        <div className="pb-6 pt-4">

                            <CheckFeature label="Easy setup, no coding required" />
                        </div>
                        <div className="pb-6">
                            <CheckFeature label="Free forever for core features" />

                        </div>
                        <CheckFeature label="14-day trial of premium features & apps" />
                    </div>
                    <div className="flex-1 pt-6 pb-6 mt-12 px-4 border rounded-md">
                        <Input label="Name" placeholder="Your name" onChange={(e) => setName(e.target.value)}></Input>
                            
                        <Input label="Email" placeholder="Email" onChange={(e) => {
                            setEmail(e.target.value)
                        }}  ></Input>
                        <Input label="Password" placeholder="Password" onChange={(e) => {
                            setPassword(e.target.value)
                        }}  ></Input>


                        <div className="pt-4">
                            <PrimaryButton size="big" onClick={async () => { 
                                // Call API to signup user with name, email and password.

                                const res = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,{
                                    username: email,
                                    name,
                                    password
                                });

                                router.push("/login")
                            }}>
                                Get started free
                            </PrimaryButton>

                        </div>


                    </div>


                </div>
            </div>


        </div>
    )
}

export default signup 
