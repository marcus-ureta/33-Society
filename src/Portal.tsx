
import { buttonVariants } from './components/ui/button.tsx'
import { cn } from './lib/utils'

import { ArrowRight, ArrowLeft } from "flowbite-react-icons/outline";
import { Logo } from '@/components/logos/Logo.tsx'

import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
                        <button className={cn(buttonVariants({ variant: "default", size: "lg" }),
                            "bg-schiava-blue text-white shadow-[0_0_13px_1px_var(--color-tristesse-50)] border-2 border-schiava-blue-dark py-4 px-12 rounded-[64px] hover:bg-schiava-blue-dark hover:shadow-[0_0_13px_1px_var(--color-tristesse-50)] hover:scale-102 hover:cursor-pointer transition-all duration-300 font-['Aileron'] font-semibold text-[1rem]",
                        )}>
                            LOGIN
                        </button>

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
    const countries = [
        { label: "United States", value: "us" },
        { label: "United Kingdom", value: "uk" },
        { label: "Canada", value: "ca" },
    ]

    return(
        <>
            <div className="w-screen h-dvh bg-tristesse-0 flex flex-col pt-8">
                <div className="flex flex-col gap-y-4 items-center">
                    <Logo variant="primary" className="size-16 text-selago-100" />

                    <div className="grid grid-cols-8 sm:grid-cols-16 items-center w-[85%] max-w-[820px] gap-x-1.5 gap-y-7">
                        <div className="w-full h-[3px] bg-selago-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]"/>
                        {[...Array(15)].map((_, index) => (
                            <div key={index} className="w-full h-[3px] bg-davys-grey-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]" />
                        ))}
                    </div>
                </div>


                <div className='flex flex-col items-center justify-center w-full h-[80%] gap-y-4 sm:gap-y-8 max-w-none prose mb-0'>
                    
                    <form className="w-full max-w-sm">
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="form-name">Name</FieldLabel>
                                <Input id="form-name" type="text" placeholder="Evil Rabbit" required/>
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="form-email">Email</FieldLabel>
                                <Input id="form-email" type="email" placeholder="john@example.com" />
                                <FieldDescription>We&apos;ll never share your email with anyone.</FieldDescription>
                            </Field>

                            <div className="grid grid-cols-2 gap-4">
                                <Field>
                                    <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
                                    <Input id="form-phone" type="tel" placeholder="+1 (555) 123-4567" />
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="form-country">Country</FieldLabel>
                                    <Select items={countries} defaultValue="us">
                                    <SelectTrigger id="form-country">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                        {countries.map((country) => (
                                            <SelectItem key={country.value} value={country.value}>
                                            {country.label}
                                            </SelectItem>
                                        ))}
                                        </SelectGroup>
                                    </SelectContent>
                                    </Select>
                                </Field>
                            </div>

                            <Field>
                                <FieldLabel htmlFor="form-address">Address</FieldLabel>
                                <Input id="form-address" type="text" placeholder="123 Main St" />
                            </Field>
                            
                            <Field orientation="horizontal">
                                <Button type="button" variant="outline">
                                    Cancel
                                </Button>

                                <Button type="submit">Submit</Button>
                            </Field>
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