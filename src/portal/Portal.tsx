
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { ArrowRight } from "flowbite-react-icons/outline";

import { Logo } from '@/components/logos/Logo.tsx'

import MagneticButton from "@/components/magnetic_button/MagneticButton.tsx";
import { useState, useEffect } from 'react';

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
            <div className='flex flex-col items-center justify-center w-full h-full animate-slide-up'>
                
                <div className='flex flex-col max-w-[820px] items-center mx-[5%]'>

                    <h1 className="text-[2.5rem] sm:text-[3.5rem] text-selago-0 font-['Cochin'] text-center font-bold mb-[3%]">Congratulations! You may now proceed to the home page</h1>

                    <MagneticButton onClick={() => console.log('logged in!')} message='Go Home Page' className='w-full'/>

                </div>

            </div>
        </div>
    )
}

function Portal() {
    const [page, setPage] = useState<Page>(Page.portal);
    const [mousePos, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e : MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <div className="w-screen h-dvh bg-tristesse-0 flex flex-col pt-8 overflow-hidden">
                
                {page === Page.portal && (
                    <div className={`w-full h-full animate-slide-up`}>
                        <div className="flex flex-col gap-y-4 items-center">
                            <Logo variant="primary" className="size-16 text-selago-100" />

                            <div className="flex gap-x-3 items-center w-[320px]">
                                <div className="w-full h-[3px] bg-selago-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]" />
                                <div className="w-full h-[3px] bg-davys-grey-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]" />
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full h-[80%]">
                            <div className="grid grid-rows-2 gap-y-8 w-full max-w-md">
                                <form className="w-full">
                                    <Field>
                                        <div className="relative w-full">
                                            <Input name="password" id="password" type="password" placeholder="Input Password" required className="input-field w-full rounded-none! pr-12"/>

                                            <ArrowRight className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-davys-grey-0 hover:text-selago-0 border-2 rounded-full transition-all duration-200 hover:cursor-pointer" onClick={() => setPage(Page.signup)}/>
                                        </div>
                                    </Field>
                                </form>

                                <MagneticButton onClick={() => setPage(Page.login)} message='LOG IN' className='w-full'/>
                            </div>
                        </div>
                    </div>
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

            <div style={{
                position: 'fixed',
                top: mousePos.y,
                left: mousePos.x,
                height: '10vw',
                width: '10vw',
                backgroundImage: 'radial-gradient(hsla(225, 38%, 50%, 0.1), hsla(222, 100%, 98%, 0.1))',
                filter: 'blur(60px)',
                borderRadius: '50%',
                pointerEvents: 'none',
                transform: `translate(-30%, -25%)`,
            }}/>
        </>
    );
}

export default Portal