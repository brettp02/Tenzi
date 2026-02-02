'use client'

import Die from "@/components/Die";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {nanoid} from "nanoid";
import Confetti from 'react-confetti'

export default function Page() {
    const [dice, setDice] = useState(() => generateAllNewDice())

    const gameWon = (dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value))

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
       gameWon ? setDice(() => generateAllNewDice()) :
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
            {gameWon && <Confetti />}
            <div className={'flex flex-col items-center justify-evenly bg-muted/75 w-[75vw] h-[75vh] max-w-[700px] rounded-xl overflow-hidden container mx-auto px-12'}>
                <h1 className="font-bold text-5xl">Tenzi</h1>
                <p className="text-muted-foreground text-center text-lg">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

                <div className={'grid grid-cols-5 gap-3'}>
                    {dice.map((die, i) => {
                        return <Die value={die.value} key={die.id} isHeld={die.isHeld} hold={() => hold(die.id)}/>
                    })}
                </div>

                <Button className={'cursor-pointer w-[150] h-[60] text-xl font-semibold'}
                onClick={rollDice}>
                    {gameWon ? `New Game` : `Roll`}
                </Button>
            </div>
        </main>
    )
}