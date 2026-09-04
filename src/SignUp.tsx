
import { buttonVariants } from './components/ui/button.tsx'
import { cn } from './lib/utils'

import { ArrowRight, ArrowLeft } from "flowbite-react-icons/outline";
import { Logo } from '@/components/logos/Logo.tsx'

import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Page } from "./Portal";

import { countries } from './utils/countries.ts'

import './Portal.css';

function SignUp({setPage} : {setPage : React.Dispatch<React.SetStateAction<Page>>}){
    return(
        <>
            <div className="w-screen h-dvh bg-tristesse-0 flex flex-col pt-8">
                <div className="flex flex-col gap-y-4 items-center">
                    <Logo variant="primary" className="size-16 text-selago-100" />

                    <div className="flex flex-row items-center w-[75%] max-w-[820px] gap-x-4 gap-y-7">
                        <div className="w-[50%] h-[3px] bg-selago-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]"/>
                        {[...Array(5)].map((_, index) => (
                            <div key={index} className="w-[50%] h-[3px] bg-davys-grey-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]" />
                        ))}
                    </div>
                </div>


                <div className='flex flex-col items-center justify-center h-[105%] gap-y-4 sm:gap-y-8 max-w-none prose mb-0 mx-[5%]'>
                    
                    <form className="w-full max-w-[548px]">
                        <FieldGroup className='flex flex-col gap-y-9'>
                            <div className="grid grid-cols-2 gap-4">
                                <Field>
                                    <FieldLabel htmlFor="form-first-name" className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">First Name</FieldLabel>
                                    <Input id="form-first-name" type="text" placeholder="John" required className="input-field"/>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="form-last-name" className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">Last Name</FieldLabel>
                                    <Input id="form-last-name" type="text" placeholder="Doe" required className="input-field"/>
                                </Field>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Field>
                                    <FieldLabel htmlFor="form-email" className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">Email</FieldLabel>
                                    <Input id="form-email" type="email" placeholder="john@example.com" required className="input-field"/>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="form-birthday" className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">Birthday</FieldLabel>
                                    <Input id="form-birthday" type="date" required className="input-field dark:[color-scheme:dark]"/>
                                </Field>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Field>
                                    <FieldLabel htmlFor="form-phone" className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">Phone</FieldLabel>
                                    <Input id="form-phone" type="tel" placeholder="+63 (555) 123-4567" required className="input-field"/>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="form-country" className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">Country</FieldLabel>
                                    <Select items={countries} defaultValue="ph" required>
                                        <SelectTrigger id="form-country" className="input-field">
                                            <SelectValue />
                                        </SelectTrigger>

                                        <SelectContent className="input-field border-2">
                                            <SelectGroup className="input-field">
                                            {countries.map((country) => (
                                                <SelectItem key={country.value} value={country.value} className="input-field">
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
                                    <FieldLabel htmlFor="form-company" className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">Company/Business Name</FieldLabel>
                                    <Input id="form-company" type="text" placeholder="Acme Inc." required className="input-field"/>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="form-igname" className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">Instagram Handle</FieldLabel>
                                    <Input id="form-igname" type="text" placeholder="@33_society" required className="input-field"/>
                                </Field>
                            </div>

                            <div className='flex flex-col items-center justify-center mt-[4%]'>
                                <Button onClick={() => setPage(Page.questionnaire)} variant="outline" className={cn(buttonVariants({ variant: "default", size: "lg" }),
                                    "bg-schiava-blue text-white border-2 border-schiava-blue-dark py-5 px-12 rounded-[64px] hover:bg-schiava-blue-dark hover:scale-102 hover:cursor-pointer transition-all duration-300 font-['Aileron'] font-semibold text-[1.575rem]",
                                )}>
                                    Submit
                                </Button>
                            </div>
                        </FieldGroup>
                    </form>

                </div>


                <div className='flex flex-col items-center justify-center w-full h-[10%] gap-y-2.5' onClick={() => setPage(Page.portal)}>
                    <ArrowLeft className="w-6 h-6 hover:text-schiava-blue-light text-selago-0 border-2 rounded-full mt-2 transition-all duration-200 hover:cursor-pointer"/>
                </div>
            </div> 
        </>
    )
}

export default SignUp