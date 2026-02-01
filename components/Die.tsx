import {Button} from "@/components/ui/button";

export default function Die({value} : {value: number}) {
    return (
        <Button className={"bg-white w-[75] h-[75] flex items-center justify-center rounded-md shadow-md cursor-pointer"}>
            <p className={'text-secondary text-3xl font-bold'}>{value}</p>
        </Button>
    )
}