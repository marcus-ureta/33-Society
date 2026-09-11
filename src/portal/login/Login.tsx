
import { buttonVariants } from '@/components/ui/button.tsx'
import { cn } from '@/lib/utils.ts'

import { ArrowLeft } from "flowbite-react-icons/outline";
import { Logo } from '@/components/logos/Logo.tsx'

import '@/portal/Portal.css';

import { isValidEmail, isValidInput } from "@/utils/genUtils"

import { Button } from "@/components/ui/button"

import { Page } from "@/portal/Portal";

import { loginAccount, forgetPassword } from '@/services/auth';
import { useState } from "react";


function Login({setPage} : {setPage : React.Dispatch<React.SetStateAction<Page>>}) {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const [isRequest, setIsRequest] = useState(false);

    const handleForgotPassword = async () => {
        setMessage("");
        setError("");

        if (!email) {
            setError("Please enter your email first.");
            return;
        }

        try {
            await forgetPassword(email);

            setMessage(
                "If an account exists with this email, a password reset link has been sent."
            );
        } catch (error) {
            console.error(error);
            setError("Unable to send password reset email.");
        }
    };

    async function handleLogin(event : React.FormEvent<HTMLFormElement>) {

        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const name = formData.get('name')?.toString();
        const email = formData.get('email')?.toString();
        const password = formData.get('password')?.toString();

        // INPUT VALIDATION
        if(!isValidEmail(email!)) { setError('Email is not valid!'); return; }
        if(!isValidInput(password!, 6, 4096)) {setError('Password is too short/long!'); return;}

        try {
            setIsRequest(true);
            const user = await loginAccount(email!, password!, name!);
            console.log('Successfully logged in!: ' + user.displayName);
        } catch (error : any) {
            let message = "Something went wrong.";

            switch (error.code) {
                case "auth/invalid-credential":
                    message = "Invalid Credentials";
                    break;
                case "auth/user-not-found":
                    message = "Account not found";
                    break;
                case "auth/wrong-password":
                    message = "Invalid Credentials";
                    break;
                case "auth/too-many-requests":
                    message = "Too many attempts. Try again later.";
                    break;
            }

            setError(message);
            console.error("Login failed:", error);
        } finally {
            setIsRequest(false);
        }
    }

    return(
        <div className={`animate-slide-up w-full h-full`}>                
            <div className="flex flex-col gap-y-4 items-center">
                <Logo variant="primary" className="size-16 text-selago-100"/>
            </div>

            <form onSubmit={handleLogin} className="flex flex-col items-center justify-center w-full h-[82%] gap-y-12">
                <div className="flex flex-col gap-y-9 items-center">
                    <input name="name" type='text' placeholder="Your Name" className="border-b-[1px] border-davys-grey-0 text-[2rem] text-davys-grey-0 font-['instrument-serif'] italic pl-[8px] absolute left-[-9999px]"/>

                    <input name="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-b-[1px] border-davys-grey-0 text-[2rem] text-davys-grey-0 font-['instrument-serif'] italic pl-[8px]"/>

                    <input name="password" type="password" placeholder="Password" className="border-b-[1px] border-davys-grey-0 text-[2rem] text-davys-grey-0 font-['instrument-serif'] italic pl-[8px]"/>
                </div>

                <div className="flex flex-col gap-y-6 items-center">
                    <Button type="submit" variant="outline" disabled={isRequest} className={cn (buttonVariants({variant: "default", size: "lg",}), 
                    "button-styling")}>
                        {isRequest ? (
                            <>
                                <span className="spinner" />
                                Logging in...
                            </>
                        ) : (
                            "Log In"
                        )}
                    </Button>

                    <h2 onClick={handleForgotPassword} className="text-selago-100 underline transition-colors duration-200 cursor-pointer font-['Aileron'] text-[1rem] hover:text-schiava-blue-light">
                        Forget Password
                    </h2>

                    {message && (
                        <p className="text-green-400 text-sm font-['Aileron']">{message}</p>
                    )}

                    {error && (
                        <p className="text-red-400 text-sm font-['Aileron']">{error}</p>
                    )}

                </div>
            </form>

            <div className="flex flex-col items-center justify-center w-full h-[10%] gap-y-2.5">
                <ArrowLeft onClick={() => setPage(Page.portal)} className="w-6 h-6 hover:text-schiava-blue-light text-selago-0 border-2 rounded-full mt-2 transition-all duration-200 hover:cursor-pointer" />
            </div>
        </div>
    )
}

export default Login