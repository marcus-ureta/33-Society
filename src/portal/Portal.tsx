
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
    portal: 'Portal',

    signup: 'Signup',
    questionnaire: 'Questionnaire',
    accountSetup: 'AccountSetup',
    congratulations: 'Congratulations',

    login: 'Login',
} as const;

export type Page = typeof Page[keyof typeof Page];


function CongratulationsPage() {

    return(
        <div className="w-screen h-dvh bg-tristesse-0 flex flex-col pt-8">
            <div className='flex flex-col items-center justify-center w-full h-full'>
                
                <div className='flex flex-col max-w-[820px] items-center mx-[5%]'>

                    <h1 className="text-[2.5rem] sm:text-[3.5rem] text-selago-0 font-['Cochin'] text-center font-bold mb-[3%]">Congratulations! You may now proceed to the home page</h1>

                    <Button type="submit" variant="outline" className={cn(buttonVariants({ variant: "default", size: "lg" }),
                        "button-styling w-fit",
                    )}>
                        Go Home Page
                    </Button>

                </div>

            </div>
        </div>
    )
}

function Portal() {

    const [page, setPage] = useState<Page>(Page.portal);

    return (

        <div className="w-screen h-dvh bg-tristesse-0 flex flex-col pt-8">
            
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
                            <Button onClick={() => setPage(Page.signup)} variant="outline" className={cn(buttonVariants({ variant: "default", size: "lg" }),"button-styling",)}>
                                SIGN UP
                            </Button>

                            <Button onClick={() => setPage(Page.login)} variant="outline" className={cn(buttonVariants({ variant: "default", size: "lg" }), "button-styling",)}>
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