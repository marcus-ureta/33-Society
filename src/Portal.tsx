
import { buttonVariants } from './components/ui/button.tsx'
import { cn } from './lib/utils'

import { ArrowRight, ArrowLeft } from "flowbite-react-icons/outline";
import { Logo } from '@/components/logos/Logo.tsx'

import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { countries } from './utils/countries.ts'

function loginSignUpPage() {

    return(
        <div className="w-screen h-dvh bg-tristesse-0 flex flex-col pt-8">
            <div className="flex flex-col gap-y-4 items-center">
                <Logo variant="primary" className="size-16 text-selago-100" />

                <div className="flex gap-x-3 items-center w-[320px]">
                    <div className="w-full h-[3px] bg-selago-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]" />
                    <div className="w-full h-[3px] bg-davys-grey-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]" />
                </div>
            </div>

            <div className='flex flex-col items-center justify-center w-full h-[80%]'>

                <div className='grid grid-rows-2 gap-y-4'>
                    <Button type="submit" variant="outline" className={cn(buttonVariants({ variant: "default", size: "lg" }),
                                    "bg-schiava-blue text-white border-2 border-schiava-blue-dark py-5 px-12 rounded-[64px] hover:bg-schiava-blue-dark hover:scale-102 hover:cursor-pointer transition-all duration-300 font-['Aileron'] font-semibold text-[1.575rem]",
                                )}>
                        SIGN UP
                    </Button>

                    <Button type="submit" variant="outline" className={cn(buttonVariants({ variant: "default", size: "lg" }),
                                    "bg-schiava-blue text-white border-2 border-schiava-blue-dark py-5 px-12 rounded-[64px] hover:bg-schiava-blue-dark hover:scale-102 hover:cursor-pointer transition-all duration-300 font-['Aileron'] font-semibold text-[1.575rem]",
                                )}>
                        LOGIN
                    </Button>
                </div>

            </div>
        </div>
    )
}

function passWordPage() {
    return(
        <div className="w-screen h-dvh bg-tristesse-0 flex flex-col pt-8">
            
            <div className="flex flex-col gap-y-4 items-center">
                <Logo variant="primary" className="size-16 text-selago-100" />

                <div className="flex gap-x-3 items-center w-[320px]">
                    <div className="w-full h-[3px] bg-davys-grey-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]" />
                    <div className="w-full h-[3px] bg-davys-grey-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]" />
                </div>
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-center w-full h-[80%] gap-x-2.5 gap-y-2.5'>
                <input name='password'placeholder='Password' className="border-b-[1px] border-davys-grey-0 text-[2rem] text-davys-grey-0 font-['instrument-serif'] italic pl-[8px]" />

                <ArrowRight className="w-6 h-6 text-davys-grey-0 hover:text-selago-0 border-2 rounded-full mt-2 transition-all duration-200 hover:cursor-pointer" />
            </div>
            
        </div>
    )
}

function loginPage() {
    return(
        <>
            <div className="w-screen h-dvh bg-tristesse-0 flex flex-col pt-8">
                
                <div className="flex flex-col gap-y-4 items-center">
                    <Logo variant="primary" className="size-16 text-selago-100" />
                </div>

                <div className='flex flex-col items-center justify-center w-full h-[80%] gap-y-16'>

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

                </div>

                <div className='flex flex-col items-center justify-center w-full h-[10%] gap-y-2.5'>
                    <ArrowLeft className="w-6 h-6 text-davys-grey-0 hover:text-selago-0 border-2 rounded-full mt-2 transition-all duration-200 hover:cursor-pointer"/>
                </div>
                
            </div>
        </>
    )
}

function signUpPage() {

    return(
        <>
            <div className="w-screen h-dvh bg-tristesse-0 flex flex-col pt-8">
                <div className="flex flex-col gap-y-4 items-center">
                    <Logo variant="primary" className="size-16 text-selago-100" />

                    <div className="flex flex-row items-center w-[75%] max-w-[820px] gap-x-4 gap-y-7">
                        <div className="w-[50%] h-[3px] bg-selago-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]"/>
                        {[...Array(8)].map((_, index) => (
                            <div key={index} className="w-[50%] h-[3px] bg-davys-grey-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]" />
                        ))}
                    </div>
                </div>


                <div className='flex flex-col items-center justify-center h-[80%] gap-y-4 sm:gap-y-8 max-w-none prose mb-0'>
                    
                    <form className="w-full max-w-[548px]">
                        <FieldGroup className='flex flex-col gap-y-9'>
                            <div className="grid grid-cols-2 gap-4">
                                <Field>
                                    <FieldLabel htmlFor="form-first-name" className='text-selago-0'>First Name</FieldLabel>
                                    <Input id="form-first-name" type="text" placeholder="Evil Rabbit" required className="bg-tristesse-0 border-davys-grey-100"/>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="form-last-name" className='text-selago-0'>Last Name</FieldLabel>
                                    <Input id="form-last-name" type="text" placeholder="Rabbit" required className="bg-tristesse-0 border-davys-grey-100"/>
                                </Field>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Field>
                                    <FieldLabel htmlFor="form-email" className='text-selago-0'>Email</FieldLabel>
                                    <Input id="form-email" type="email" placeholder="john@example.com" required className="bg-tristesse-0 border-davys-grey-100"/>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="form-birthday" className='text-selago-0'>Birthday</FieldLabel>
                                    <Input id="form-birthday" type="date" required className="bg-tristesse-0 border-davys-grey-100 dark:[color-scheme:dark]"/>
                                </Field>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Field>
                                    <FieldLabel htmlFor="form-phone" className='text-selago-0'>Phone</FieldLabel>
                                    <Input id="form-phone" type="tel" placeholder="+63 (555) 123-4567" required className="bg-tristesse-0 border-davys-grey-100"/>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="form-country" className='text-selago-0'>Country</FieldLabel>
                                    <Select items={countries} defaultValue="ph" required>
                                        <SelectTrigger id="form-country" className="bg-tristesse-0 border-davys-grey-100">
                                            <SelectValue />
                                        </SelectTrigger>

                                        <SelectContent className="bg-tristesse-0 border-davys-grey-100 border-2">
                                            <SelectGroup className="bg-tristesse-0">
                                            {countries.map((country) => (
                                                <SelectItem key={country.value} value={country.value} className="bg-tristesse-0 border-davys-grey-100/20 text-selago-50 border-b-2">
                                                {country.label}
                                                </SelectItem>
                                            ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </Field>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Field>
                                    <FieldLabel htmlFor="form-company" className='text-selago-0'>Company/Business Name</FieldLabel>
                                    <Input id="form-company" type="text" placeholder="Acme Inc." required className="bg-tristesse-0 border-davys-grey-100"/>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="form-igname" className='text-selago-0'>Instagram Handle</FieldLabel>
                                    <Input id="form-igname" type="text" placeholder="@33_society" required className="bg-tristesse-0 border-davys-grey-100"/>
                                </Field>
                            </div>

                            <div className='flex flex-col items-center justify-center mt-[4%]'>
                                <Button type="submit" variant="outline" className={cn(buttonVariants({ variant: "default", size: "lg" }),
                                    "bg-schiava-blue text-white border-2 border-schiava-blue-dark py-5 px-12 rounded-[64px] hover:bg-schiava-blue-dark hover:scale-102 hover:cursor-pointer transition-all duration-300 font-['Aileron'] font-semibold text-[1.575rem]",
                                )}>
                                    Submit
                                </Button>
                            </div>
                        </FieldGroup>
                    </form>

                </div>



                {/* QUESTIONNAIRE EXAMPLE */}

                {/* <div className='flex flex-col items-center justify-center w-full h-[80%] gap-y-4 sm:gap-y-12 max-w-none prose'>
                    <h1 className="font-['Cochin'] font-bold text-selago-100 text-6xl sm:text-7xl mx-12 text-center">
                        What is your name?
                    </h1>

                    <div className='flex flex-col sm:flex-row items-center justify-center gap-x-2.5 gap-y-2.5 w-full'>
                        <input name='answer' placeholder='Your Answer' className="border-b-[1px] border-davys-grey-0 text-[2rem] text-davys-grey-0 font-['instrument-serif'] italic pl-[8px] w-[90%] max-w-[660px] mb-0" />

                        <ArrowRight className="w-6 h-6 text-davys-grey-0 hover:text-selago-0 border-2 rounded-full mt-2 transition-all duration-200 hover:cursor-pointer" />
                    </div>
                </div> */}

                <div className='flex flex-col items-center justify-center w-full h-[10%] gap-y-2.5'>
                    <ArrowLeft className="w-6 h-6 text-davys-grey-0 hover:text-selago-0 border-2 rounded-full mt-2 transition-all duration-200 hover:cursor-pointer"/>
                </div>
            </div> 
        </>
    )
}

function Portal() {
    return (
        <>
            {signUpPage()}
        </>
    )
}

export default Portal