import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button";

export default function Die({value, isHeld, hold} : {value: number, isHeld: boolean, hold: () => void}) {
    return (
        <Button className={`bg-white w-[75] h-[75] flex items-center justify-center rounded-md shadow-md cursor-pointer
                            ${isHeld ? "bg-[#59E391]" : "bg-white"}`}
                onClick={hold}
        >

            <p className={'text-secondary text-3xl font-bold'}>{value}</p>

        </Button>
    )

}