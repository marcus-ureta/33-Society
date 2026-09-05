import { Field, FieldGroup} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { buttonVariants } from '@/components/ui/button.tsx'
import { cn } from '@/lib/utils.ts'

import { Logo } from '@/components/logos/Logo.tsx'

import { Button } from "@/components/ui/button"

import '@/portal/Portal.css';

import { Page } from '@/portal/Portal';

import crown from '/svg/CROWN_CROPPED.svg';


import {createAccount, checkVerification} from '@/services/auth'
import type { FormAnswers } from "../SignUp"

import { useState } from 'react';


function EmailVerification({setPage, email, formAnswers} : {setPage : React.Dispatch<React.SetStateAction<Page>>, email : string, formAnswers : FormAnswers}){

    async function handleVerification(){
        try{
            await checkVerification(formAnswers);
            setPage(Page.congratulations);
        }catch(e){
            console.log(e);
        }
    }

    return(
        <>
            <div className='flex flex-col w-full h-[80%] items-center justify-center gap-y-4'>
                <h1 className="font-['Cochin'] text-3xl text-selago-0 font-bold text-center">We've sent a verification link to: {email}</h1>
                <h2 className="font-['Aileron'] text-xl text-selago-0 mb-[16px] text-center">Please verify your email, then click the button below</h2>

                <Button onClick={handleVerification} variant="outline" className={cn(buttonVariants({variant: "default", size: "lg",}),
                        "bg-schiava-blue text-white border-2 border-schiava-blue-dark py-5 px-12 rounded-[64px] hover:bg-schiava-blue-dark hover:scale-102 transition-all duration-300 font-['Aileron'] font-semibold text-[1.575rem] hover:cursor-pointer"
                    )}
                >
                    Check Verification
                </Button>
            </div>
        </>
    )
}

function AccountSetup({setPage, email, formAnswers} : {setPage : React.Dispatch<React.SetStateAction<Page>>, email : string, formAnswers : FormAnswers}){

    const [goVerificationPage, setVerificationPage] = useState<boolean>(false);

    async function handleSignup(event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        // INPUT VALIDATION


        const registeredEmail = formData.get('email_address')?.toString();
        const password = formData.get('password')?.toString();

        try {
            const user = await createAccount(registeredEmail!, password!);
            setVerificationPage(true);
            console.log("Account created:", user.uid);
        } catch (error) {
            console.error("Signup failed:", error);
        }
    }

    return (
        <>
            {goVerificationPage && (
                <EmailVerification setPage={setPage} email={email} formAnswers={formAnswers}/>
            )}

            {!goVerificationPage && (
                <div className="flex flex-col gap-y-4 items-center mt-[5%]">
                    <div className="w-full max-w-6xl flex items-center justify-center gap-8">
                
                    <form onSubmit={handleSignup} className="w-full max-w-[548px] mx-[5%]">
                        <h1 className="text-white font-['Cochin'] text-5xl font-bold">Account Setup</h1>

                        <FieldGroup className="flex flex-col gap-y-6 my-[5%]">
                            <Field>
                                <Input name='email_address' id="email_address" type="email" placeholder="33society@gmail.com" required className="bg-tristesse-0 border-davys-grey-100 text-selago-0 !text-[17px] h-fit py-[6px] px-2" defaultValue={email}/>
                            </Field>

                            <Field>
                                <Input name='password' id="password" type="password" placeholder="Setup Your Password" required className="bg-tristesse-0 border-davys-grey-100 text-selago-0 !text-[17px] h-fit py-[6px] px-2"/>
                            </Field>
                        </FieldGroup>

                        <div className="flex justify-center mt-[4%]">
                            <Button type='submit' variant="outline" className={cn(buttonVariants({variant: "default", size: "lg",}),
                                "bg-schiava-blue text-white border-2 border-schiava-blue-dark py-5 px-12 rounded-[64px] hover:bg-schiava-blue-dark hover:scale-102 transition-all duration-300 font-['Aileron'] font-semibold text-[1.575rem] hover:cursor-pointer"
                            )}
                        >
                                Register Account
                            </Button>
                        </div>
                    </form>

                        <Logo variant="stacked" className="hidden sm:block size-64 lg:size-96 xl:size-[28rem] text-selago-100 shrink-0"/>
                    </div>
                </div>
            )}

            <div className="absolute bottom-0 left-0 w-full h-[600px] overflow-hidden pointer-events-none select-none">
                <img src={crown} className="absolute bottom-0 left-0 w-full h-auto md:translate-y-[clamp(0px,4vw,500px)] select-none"/>
            </div>
        </>
    );  
}

export default AccountSetup