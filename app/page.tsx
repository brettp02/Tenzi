'use client'

import Die from "@/components/Die";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {nanoid} from "nanoid";

export default function Page() {
    const [dice, setDice] = useState(generateAllNewDice())

    function generateAllNewDice() {
        const newArray = []

        for (let i = 0; i < 10; i++) {
            const randomNum = Math.floor(Math.random() * 6) + 1
            newArray.push({
                value: randomNum,
                isHeld: false,
                id: nanoid()
            })
        }

        return newArray
    }

    function hold(id: string) {
        setDice(previousDice => {
            return previousDice.map(die => {
                return die.id === id ?
                    {...die, isHeld: !die.isHeld}:
                    die
            })
        })
    }

    function rollDice() {
        setDice(previousDice => {
            return previousDice.map(die => {
                return die.isHeld ?
                    die:
                    {...die, value: Math.floor(Math.random() * 6) + 1}

            })
        })
    }

    return (
        <main className={'flex items-center justify-center h-[100vh]'}>
            <div className={'flex flex-col items-center justify-evenly bg-muted w-[75vw] h-[75vh] max-w-[700px] rounded-xl overflow-hidden'}>
                <h1>Title</h1>

                <div className={'grid grid-cols-5 gap-3'}>
                    {dice.map((die, i) => {
                        return <Die value={die.value} key={die.id} isHeld={die.isHeld} hold={() => hold(die.id)}/>
                    })}
                </div>

                <Button className={'cursor-pointer w-[100] h-[60] text-xl font-semibold'}
                onClick={rollDice}>
                    Roll
                </Button>
            </div>
        </main>
    )
}