
export default function Die({value} : {value: number}) {
    return (
        <div className={"bg-white w-[70] h-[70] flex items-center justify-center rounded-md"}>
            <h3 className={'text-secondary text-2xl font-semibold'}>{value}</h3>
        </div>
    )
}