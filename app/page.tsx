'use client'

import Die from "@/components/Die";
import {useState} from "react";

export default function Page() {
    function generateAllNewDice() {
        const newArray = []

        for (let i = 0; i < 10; i++) {
            const randomNum = Math.floor(Math.random() * 6) + 1
            newArray.push(randomNum)
        }

        return newArray
    }
    const [dieNumbers, setDieNumbers] = useState(generateAllNewDice())



    generateAllNewDice()
    return (
        <main className={'flex items-center justify-center h-[100vh]'}>
            <div className={'flex flex-col items-center justify-center bg-muted w-[75vw] h-[75vh] max-w-[700px] rounded-xl overflow-hidden'}>
                <div className={'grid grid-cols-5 gap-3'}>
                    {dieNumbers.map((item, i) => {
                        return <Die value={item} key={i}/>
                    })}
                </div>
            </div>
        </main>
    )
}