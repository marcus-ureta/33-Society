import { Field, FieldGroup, FieldLabel} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { buttonVariants } from '@/components/ui/button.tsx'
import { cn } from '@/lib/utils.ts'
import { isValidInput } from "@/utils/genUtils"

import { Logo } from '@/components/logos/Logo.tsx'

import { Button } from "@/components/ui/button"

import '@/portal/Portal.css';

import { Page } from '@/portal/Portal';


import {createAccount, checkVerification} from '@/services/auth'
import type { FormAnswers } from "../SignUp"

import { useState } from 'react';

import { Eye, EyeSlash } from "flowbite-react-icons/outline";


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
            <div className='w-full h-[85%] flex flex-col place-items-center justify-center'>
                <Logo variant="primary" className="size-16 text-selago-100 mb-[48px]" />

                <div className="w-[95%] sm:w-full max-w-[560px] mx-[5%] border-2 px-0 sm:px-10 py-10 box-content border-selago-0 rounded-4xl flex flex-col justify-center items-center">
                    <h1 className="font-['Cochin'] text-3xl sm:text-5xl text-selago-0 font-bold text-center mb-[20px]">We've sent you an email!</h1>
                    <h2 className="font-['Aileron'] text-base sm:text-l text-selago-0 mb-[16px] text-center"> We’ve sent a verification link to {email}. Please click the link to verify your account, then press the button below</h2>

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
            </div>
        </>
    )
}

function AccountSetup({setPage, email, formAnswers} : {setPage : React.Dispatch<React.SetStateAction<Page>>, email : string, formAnswers : FormAnswers}){

    const [goVerificationPage, setVerificationPage] = useState<boolean>(false);
    const [isRequest, setIsRequest] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const [showPassword, setShowPassword] = useState<boolean>(false);

    async function handleSignup(event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const password = formData.get('password')?.toString();
        const confirm_password = formData.get('confirm_password')?.toString();

        // INPUT VALIDATION
        if(!isValidInput(password!, 6, 4096)) {setErrorMessage('Password is too short/long!'); return;}

        try {
            setIsRequest(true);
            const user = await createAccount(email, password!, confirm_password!);
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
        <div className={`animate-slide-up w-full h-full overflow-hidden`}>

            {goVerificationPage && (
                <EmailVerification setPage={setPage} email={email} formAnswers={formAnswers}/>
            )}

            {!goVerificationPage && (

                <div className="w-full h-[89%] flex flex-col place-items-center justify-center">
                    <Logo variant="primary" className="size-16 text-selago-100 mb-[48px]" />

                    <form onSubmit={handleSignup} className="w-full max-w-[560px] mx-[5%] border-2 px-10 py-5 box-content border-selago-0 rounded-4xl">
                        <h1 className="text-white font-['Cochin'] text-5xl font-bold text-center">Create Your Password</h1>

                        <h1 className="font-['Aileron'] text-[clamp(0.5rem,5vw,1.25rem)] text-selago-100 text-center mt-[16px]">Set a strong password for <span className='font-bold'>{email}</span>. Use at least 8 characters, including 1 number and 1 symbol</h1>

                        <FieldGroup className="flex flex-col gap-y-6 my-[5%]">
                            <Field>
                                <FieldLabel htmlFor="password" className="font-['Aileron'] text-xl text-selago-0">Password</FieldLabel>
                                <div className="relative">
                                    <Input name='password' id="password" type={showPassword ? 'text' : 'password'} placeholder="Setup Your Password" required className="input-field pr-12" onChange={() => setErrorMessage('')}/>

                                    {showPassword === false && (
                                        <Eye className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-auto text-davys-grey-0 hover:text-selago-0 border-2 rounded-full transition-all duration-200 hover:cursor-pointer" onClick={() => setShowPassword(!showPassword)}/>
                                    )}

                                    {showPassword === true && (
                                        <EyeSlash className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-auto text-davys-grey-0 hover:text-selago-0 border-2 rounded-full transition-all duration-200 hover:cursor-pointer" onClick={() => setShowPassword(!showPassword)}/>
                                    )}
                                </div>
                            </Field>

                            <Input name='confirm_password' id="confirm_password" type="confirm_password" placeholder="Confirm Password" className="input-field absolute left-[-9999px]"/>
                        </FieldGroup>

                        <div className="flex justify-center mt-[4%]">
                            <Button disabled={isRequest} type='submit' variant="outline" className={cn(buttonVariants({variant: "default", size: "lg",}),
                                "button-styling w-full")}>
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
                </div>
            )}
        </div>
    );  
}

export default AccountSetup