"use client"
import React from 'react'
import { LinkButton } from './Button/LinkButton'
import { useRouter } from 'next/navigation'
import { PrimaryButton } from './Button/PrimaryButton'





const Appbar = () => {
    const router = useRouter()
    return (
        <div className='flex border-b justify-between p-4'>
            <div className='flex flex-col justify-center text-2xl font-extraboldphero'>
                Zapier
            </div>

            <div className='flex'>
                <div className='pr-4'>
                    <LinkButton onClick={() => { }}>Contact Sales</LinkButton>
                </div>

                <div className='pr-4'>
                    <LinkButton onClick={() => {
                        router.push("/login")
                    }}>Login</LinkButton>

                </div>


                <PrimaryButton onClick={() => {
                    router.push("/signup")
                }}>
                    Signup
                </PrimaryButton>



            </div>

        </div>
    )
}

export default Appbar