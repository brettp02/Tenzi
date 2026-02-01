import { ComponentExample } from "@/components/component-example";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import Die from "@/components/Die";

export default function Page() {
    const nums = [1,2,3,4,5,6,1,2,3]

    return (
        <main className={'flex items-center justify-center h-[100vh]'}>
            <div className={'flex flex-col items-center justify-center bg-muted w-[75%] h-[75%] rounded-xl'}>
                <div className={'grid grid-cols-5 gap-2'}>
                    {nums.map((item, i) => {
                        return <Die value={item} key={i}/>
                    })}
                    <Die value={5} />
                </div>
            </div>
        </main>
    )
}