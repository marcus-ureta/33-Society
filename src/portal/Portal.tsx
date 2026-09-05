
import { buttonVariants } from '../components/ui/button.tsx'
import { cn } from '../lib/utils.ts'

import { ArrowRight } from "flowbite-react-icons/outline";
import { Logo } from '@/components/logos/Logo.tsx'

import { Button } from "@/components/ui/button"
import { useState } from 'react';

import SignUp from './SignUp.tsx';
import Login from './login/Login.tsx'

import './Portal.css';

export const Page = {
    password: 'Password',
    portal: 'Portal',

    signup: 'Signup',
    questionnaire: 'Questionnaire',
    accountSetup: 'AccountSetup',
    congratulations: 'Congratulations',

    login: 'Login',
} as const;

export type Page = typeof Page[keyof typeof Page];


function PasswordPage({setPage} : {setPage : React.Dispatch<React.SetStateAction<Page>>}){
    return(
        <>
            <div className="flex flex-col gap-y-4 items-center">
                <Logo variant="primary" className="size-16 text-selago-100" />

                <div className="flex gap-x-3 items-center w-[320px]">
                    <div className="w-full h-[3px] bg-davys-grey-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]" />
                    <div className="w-full h-[3px] bg-davys-grey-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]" />
                </div>
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-center w-full h-[80%] gap-x-2.5 gap-y-2.5'>
                <input name='password'placeholder='Password' className="border-b-[1px] border-davys-grey-0 text-[2rem] text-davys-grey-0 font-['instrument-serif'] italic pl-[8px]" />

                <ArrowRight className="w-6 h-6 text-davys-grey-0 hover:text-selago-0 border-2 rounded-full mt-2 transition-all duration-200 hover:cursor-pointer" onClick={() => setPage(Page.portal)}/>
            </div>
        </>
    )
}


function CongratulationsPage() {

    return(
        <div className="w-screen h-dvh bg-tristesse-0 flex flex-col pt-8">
            <div className='flex flex-col items-center justify-center w-full h-full'>
                
                <div className='flex flex-col max-w-[820px] items-center mx-[5%]'>

                    <h1 className="text-[2.5rem] sm:text-[3.5rem] text-selago-0 font-['Cochin'] text-center font-bold mb-[3%]">Congratulations! You may now proceed to the home page</h1>

                    <Button type="submit" variant="outline" className={cn(buttonVariants({ variant: "default", size: "lg" }),
                        "bg-schiava-blue text-white border-2 border-schiava-blue-dark py-5 px-12 rounded-[64px] hover:bg-schiava-blue-dark hover:scale-102 hover:cursor-pointer transition-all duration-300 font-['Aileron'] font-semibold text-[1.575rem] w-fit",
                    )}>
                        Go Home Page
                    </Button>

                </div>

            </div>
        </div>
    )
}

function Portal() {

    const [page, setPage] = useState<Page>(Page.password);

    return (

        <div className="w-screen h-dvh bg-tristesse-0 flex flex-col pt-8">

            {page === Page.password && (
                <PasswordPage setPage={setPage}/>
            )}

            {/* FROM THIS POINT FORWARD, FORCE USER TO ANSWER THE PASSWORD BEFORE PROCEEDING */}
            
            {page === Page.portal && (
                <>
                    <div className="flex flex-col gap-y-4 items-center">
                        <Logo variant="primary" className="size-16 text-selago-100" />

                        <div className="flex gap-x-3 items-center w-[320px]">
                            <div className="w-full h-[3px] bg-selago-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]" />
                            <div className="w-full h-[3px] bg-davys-grey-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]" />
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center w-full h-[80%]'>

                        <div className='grid grid-rows-2 gap-y-4'>
                            <Button onClick={() => setPage(Page.signup)} variant="outline" className={cn(buttonVariants({ variant: "default", size: "lg" }),
                                            "bg-schiava-blue text-white border-2 border-schiava-blue-dark py-5 px-12 rounded-[64px] hover:bg-schiava-blue-dark hover:scale-102 hover:cursor-pointer transition-all duration-300 font-['Aileron'] font-semibold text-[1.575rem]",
                                        )}>
                                SIGN UP
                            </Button>

                            <Button onClick={() => setPage(Page.login)} variant="outline" className={cn(buttonVariants({ variant: "default", size: "lg" }),
                                            "bg-schiava-blue text-white border-2 border-schiava-blue-dark py-5 px-12 rounded-[64px] hover:bg-schiava-blue-dark hover:scale-102 hover:cursor-pointer transition-all duration-300 font-['Aileron'] font-semibold text-[1.575rem]",
                                        )}>
                                LOGIN
                            </Button>
                        </div>

                    </div>
                </>
            )}

            {page === Page.login && (
                <Login setPage={setPage}/>
            )}


            {(page === Page.signup || page === Page.questionnaire || page === Page.accountSetup) && (
                <SignUp page={page} setPage={setPage} />
            )}

            {page === Page.congratulations && (
                <CongratulationsPage/>
            )}

        </div>
    );
}

export default Portal