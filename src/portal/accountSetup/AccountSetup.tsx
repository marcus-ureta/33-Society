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
    const [isRequest, setIsRequest] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    async function handleVerification(){
        try{
            setErrorMessage('');
            setIsRequest(true);
            await checkVerification(formAnswers);
            setPage(Page.congratulations);
        }catch(e){
            console.log(e);

            setErrorMessage('Account not verified yet!');
        }finally {
            setIsRequest(false);
        }
    }

    return(
        <>
            <div className='flex flex-col w-full h-[80%] items-center justify-center gap-y-4'>
                <h1 className="font-['Cochin'] text-3xl text-selago-0 font-bold text-center">We've sent a verification link to: {email}</h1>
                <h2 className="font-['Aileron'] text-xl text-selago-0 mb-[16px] text-center">Please verify your email, then click the button below</h2>

                <Button onClick={handleVerification} variant="outline" className={cn(buttonVariants({variant: "default", size: "lg",}),"button-styling")}>
                    {isRequest ? (
                        <>
                            <span className="spinner"/>
                            Registering Account...
                        </>
                    ) : (
                        "Register Account"
                    )}
                </Button>

                {errorMessage && (
                    <p className="text-red-400 text-sm font-['Aileron'] text-center mt-[16px]">{errorMessage}</p>
                )}
            </div>
        </>
    )
}

function AccountSetup({setPage, email, formAnswers} : {setPage : React.Dispatch<React.SetStateAction<Page>>, email : string, formAnswers : FormAnswers}){

    const [goVerificationPage, setVerificationPage] = useState<boolean>(false);
    const [isRequest, setIsRequest] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    async function handleSignup(event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        // INPUT VALIDATION


        const registeredEmail = formData.get('email_address')?.toString();
        const password = formData.get('password')?.toString();
        const confirm_password = formData.get('confirm_password')?.toString();

        try {
            setIsRequest(true);
            const user = await createAccount(registeredEmail!, password!, confirm_password!);
            setVerificationPage(true);
            console.log("Account created:", user.uid);
        } catch (error : any) {
            console.error("Signup failed:", error);

            if (error.code === "auth/email-already-in-use") {
                setErrorMessage("Email already in use");
            } else if (error.code === "auth/weak-password") {
                setErrorMessage("Password is too weak");
            } else if (error.code === "auth/invalid-email") {
                setErrorMessage("Invalid email address");
            } else {
                setErrorMessage("Something went wrong. Please try again.");
            }
        } finally {
            setIsRequest(false);
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
                                <Input name='email_address' id="email_address" type="email" placeholder="33society@gmail.com" required className="bg-tristesse-0 border-davys-grey-100 text-selago-0 !text-[17px] h-fit py-[6px] px-2" defaultValue={email} onChange={() => setErrorMessage('')}/>
                            </Field>

                            <Field>
                                <Input name='password' id="password" type="password" placeholder="Setup Your Password" required className="bg-tristesse-0 border-davys-grey-100 text-selago-0 !text-[17px] h-fit py-[6px] px-2" onChange={() => setErrorMessage('')}/>
                            </Field>

                            <Input name='confirm_password' id="confirm_password" type="confirm_password" placeholder="Confirm Password" className="bg-tristesse-0 border-davys-grey-100 text-selago-0 !text-[17px] h-fit py-[6px] px-2 absolute left-[-9999px]"/>
                        </FieldGroup>

                        <div className="flex justify-center mt-[4%]">
                            <Button disabled={isRequest} type='submit' variant="outline" className={cn(buttonVariants({variant: "default", size: "lg",}),
                                "button-styling")}>
                                {isRequest ? (
                                    <>
                                        <span className="spinner"/>
                                        Registering Account...
                                    </>
                                ) : (
                                    "Register Account"
                                )}
                            </Button>
                        </div>

                        {errorMessage && (
                            <p className="text-red-400 text-sm font-['Aileron'] text-center mt-[16px]">{errorMessage}</p>
                        )}
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