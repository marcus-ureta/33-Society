
import { buttonVariants } from './components/ui/button.tsx'
import { cn } from './lib/utils'

function loginSignUpPage() {

    return(
        <div className="w-screen h-dvh bg-tristesse-0 flex flex-col pt-8">
            <div className="flex flex-col gap-y-4 items-center">
                <img className="w-16 h-16" src="/svg/33.svg" alt="Logo" />

                <div className="flex gap-x-3 items-center w-[320px]">
                    <div className="w-full h-[3px] bg-selago-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]" />
                    <div className="w-full h-[3px] bg-davys-grey-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]" />
                </div>
            </div>

            <div className='flex flex-col items-center justify-center w-full h-[80%]'>

                <div className='grid grid-rows-2 gap-y-4'>
                    <button className={cn(buttonVariants({ variant: "default", size: "lg" }),
                        "bg-schiava-blue text-white shadow-[0_0_13px_1px_var(--color-tristesse-50)] border-2 border-schiava-blue-dark py-4 px-12 rounded-[64px] hover:bg-schiava-blue-dark hover:shadow-[0_0_13px_1px_var(--color-tristesse-50)] hover:scale-102 hover:cursor-pointer transition-all duration-300 font-['Aileron'] font-semibold text-[1rem]",
                    )}>
                        SIGN UP
                    </button>

                    <button className={cn(buttonVariants({ variant: "default", size: "lg" }),
                        "bg-schiava-blue text-white shadow-[0_0_13px_1px_var(--color-tristesse-50)] border-2 border-schiava-blue-dark py-4 px-12 rounded-[64px] hover:bg-schiava-blue-dark hover:shadow-[0_0_13px_1px_var(--color-tristesse-50)] hover:scale-102 hover:cursor-pointer transition-all duration-300 font-['Aileron'] font-semibold text-[1rem]",
                    )}>
                        LOGIN
                    </button>
                </div>

            </div>
        </div>
    )
}

function passWordPage() {
    return(
        <div className="w-screen h-dvh bg-tristesse-0 flex flex-col pt-8">
            <div className="flex flex-col gap-y-4 items-center">
                <img className="w-16 h-16" src="/svg/33.svg" alt="Logo" />

                <div className="flex gap-x-3 items-center w-[320px]">
                    <div className="w-full h-[3px] bg-davys-grey-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]" />
                    <div className="w-full h-[3px] bg-davys-grey-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]" />
                </div>
            </div>
        </div>
    )
}

function Portal() {
    return (
        <>
            {passWordPage()}
        </>
    )
}

export default Portal