
import { buttonVariants } from '@/components/ui/button.tsx'
import { cn } from '@/lib/utils.ts'

import { ArrowLeft } from "flowbite-react-icons/outline";
import { Logo } from '@/components/logos/Logo.tsx'

import { Button } from "@/components/ui/button"

import { Page } from "@/portal/Portal";

import { loginAccount } from '@/services/auth';

function Login({setPage} : {setPage : React.Dispatch<React.SetStateAction<Page>>}) {

    async function handleLogin(event : React.FormEvent<HTMLFormElement>) {

        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        // INPUT VALIDATION


        const email = formData.get('email')?.toString();
        const password = formData.get('password')?.toString();

        try {
            const user = await loginAccount(email!, password!);
            console.log('Successfully logged in!: ' + user.displayName);
        } catch (error) {
            console.error("Signup failed:", error);
        }
    }

    return(
        <>
            <div className="w-screen h-dvh bg-tristesse-0 flex flex-col pt-8">
                
                <div className="flex flex-col gap-y-4 items-center">
                    <Logo variant="primary" className="size-16 text-selago-100" />
                </div>

                <form onSubmit={handleLogin} className='flex flex-col items-center justify-center w-full h-[80%] gap-y-16'>
                    <div className='flex flex-col gap-y-9 items-center'>
                        <input name='email' placeholder='Email' className="border-b-[1px] border-davys-grey-0 text-[2rem] text-davys-grey-0 font-['instrument-serif'] italic pl-[8px]" />

                        <input name='password' placeholder='Password' className="border-b-[1px] border-davys-grey-0 text-[2rem] text-davys-grey-0 font-['instrument-serif'] italic pl-[8px]" />
                    </div>

                    <div className='flex flex-col gap-y-6 items-center'>
                        <Button type="submit" variant="outline" className={cn(buttonVariants({ variant: "default", size: "lg" }),
                                    "bg-schiava-blue text-white border-2 border-schiava-blue-dark py-5 px-12 rounded-[64px] hover:bg-schiava-blue-dark hover:scale-102 hover:cursor-pointer transition-all duration-300 font-['Aileron'] font-semibold text-[1.575rem]",
                                )}>
                            LOGIN
                        </Button>

                        <h2 className="text-selago-100 underline transition-colors duration-200 cursor-pointer font-['Aileron'] text-[1rem] hover:text-selago-0">
                            Forget Password
                        </h2>
                    </div>

                </form>

                <div className='flex flex-col items-center justify-center w-full h-[10%] gap-y-2.5' onClick={() => setPage(Page.portal)}>
                    <ArrowLeft className="w-6 h-6 hover:text-schiava-blue-light text-selago-0 border-2 rounded-full mt-2 transition-all duration-200 hover:cursor-pointer"/>
                </div>
                
            </div>
        </>
    )
}

export default Login