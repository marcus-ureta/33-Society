
import { buttonVariants } from '../components/ui/button.tsx'
import { cn } from '../lib/utils.ts'

import { ArrowLeft } from "flowbite-react-icons/outline";
import { Logo } from '@/components/logos/Logo.tsx'

import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { isValidEmail, isValidInput } from "@/utils/genUtils"

import { Page } from "./Portal";

import { countries } from '../utils/countries.ts'

import './Portal.css';

import { useEffect, useState } from 'react';

import QuestionnairePage from '@/portal/questionnaire/Questionnaire.tsx';
import AccountSetup from '@/portal/accountSetup/AccountSetup.tsx';

export type FormAnswers = {
    firstName: string;
    lastName: string;
    email: string;
    birthday: string;
    phone: string;
    country: string;
    businessName: string;
    instagramHandle: string;

    questionOne: string;
    questionTwo: string;
    questionThree: string;
    questionFour: string;
};


interface SignUpPageProps {
    setPage: React.Dispatch<React.SetStateAction<Page>>;

    formAnswers: FormAnswers
    setFormAnswers: React.Dispatch<React.SetStateAction<FormAnswers>>;
}

function SignUpPage({setPage, formAnswers, setFormAnswers} : SignUpPageProps){

    const [country, setCountry] = useState("ph");

    async function handleSubmission (event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Get Form Data
        const form = event.currentTarget;
        const formData = new FormData(form);

        const first_name = formData.get('form-first-name')?.toString()!;
        const last_name = formData.get('form-last-name')?.toString()!;
        
        const email = formData.get('form-email')?.toString()!;
        const birthday = formData.get('form-birthday')?.toString()!;

        const phone = formData.get('form-phone')?.toString()!;

        const company = formData.get('form-company')?.toString()!;
        const ig_handle = formData.get('form-igname')?.toString()!;

        // INPUT VALIDATION
        if(!isValidInput(first_name!, 2, 50)) return;
        if(!isValidInput(last_name!, 2, 50)) return;

        if(!isValidEmail(email!)) return;

        if(!isValidInput(company!, 1, 70)) return;
        if(!isValidInput(ig_handle!, 1, 31)) return;


        // Prepare for Next Page
        setFormAnswers(prev => ({
            ...prev,
            firstName: first_name!,
            lastName: last_name!,

            email: email!,
            birthday: birthday!,

            phone: phone!,
            country: country,

            businessName: company!,
            instagramHandle: ig_handle!
        }));
        setPage(Page.questionnaire);
    }

    return(
        <>
            <div className='flex flex-col items-center justify-center h-[105%] gap-y-4 sm:gap-y-8 max-w-none prose mb-0 mx-[5%]'>
                <form onSubmit={handleSubmission} className="w-full max-w-[720px]">
                    <FieldGroup className='flex flex-col gap-y-9'>
                        
                        {/* First Name & Last Name */}
                        <div className="grid grid-cols-2 gap-4">
                            <Field>
                                <Input name='form-first-name' id="form-first-name" type="text" placeholder="First Name" required className="input-field" defaultValue={formAnswers.firstName}/>
                            </Field>

                            <Field>
                                <Input name='form-last-name' id="form-last-name" type="text" placeholder="Last Name" required className="input-field" defaultValue={formAnswers.lastName}/>
                            </Field>
                        </div>

                        {/* Email and Birthday */}
                        <div className="grid grid-cols-2 gap-4">
                            <Field>
                                <Input name='form-email' id="form-email" type="email" placeholder="Email Address" required className="input-field" defaultValue={formAnswers.email}/>
                            </Field>

                            <Field>
                                <Input name='form-birthday' id="form-birthday" type="date" required className="input-field dark:[color-scheme:dark]" defaultValue={formAnswers.birthday}/>
                            </Field>
                        </div>

                        {/* Phone and Country */}
                        <div className="grid grid-cols-2 gap-4">
                            <Field>
                                <Input name='form-phone' id="form-phone" type="tel" placeholder="Phone Number" required className="input-field" defaultValue={formAnswers.phone}/>
                            </Field>

                            <Field>

                                <Select items={countries} defaultValue={formAnswers.country === '' ? 'ph' : formAnswers.country} onValueChange={(value) => { if (value !== null) { setCountry(value); }}} required>
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

                        {/* Business Name & Instagram Handle */}
                        <div className="grid grid-cols-2 gap-4">
                            <Field>
                                <Input name='form-company' id="form-company" type="text" placeholder="Company/Business Name" required className="input-field" defaultValue={formAnswers.businessName}/>
                            </Field>

                            <Field>
                                <Input name='form-igname' id="form-igname" type="text" placeholder="Instagram Username @" required className="input-field" defaultValue={formAnswers.instagramHandle}/>
                            </Field>
                        </div>

                        {/* Submission Button */}
                        <div className='flex flex-col items-center justify-center mt-[4%]'>
                            <Button type='submit' variant="outline" className={cn(buttonVariants({ variant: "default", size: "lg" }),"button-styling",)}>
                                Submit
                            </Button>
                        </div>

                    </FieldGroup>
                </form>
            </div>

            <div className='flex flex-col items-center justify-center w-full h-[10%] gap-y-2.5' onClick={() => setPage(Page.portal)}>
                <ArrowLeft className="w-6 h-6 hover:text-schiava-blue-light text-selago-0 border-2 rounded-full mt-2 transition-all duration-200 hover:cursor-pointer"/>
            </div>
        </>
    )
}


function SignUp({page, setPage} : {page: Page, setPage : React.Dispatch<React.SetStateAction<Page>>}){

    const [questionNo, setQuestionNo] = useState<number>(1);
    const [formAnswers, setFormAnswers] = useState<FormAnswers>({
        firstName: '',
        lastName: '',
        email: '',
        birthday: '',
        phone: '',
        country: '',
        businessName: '',
        instagramHandle: '',

        questionOne: '',
        questionTwo: '',
        questionThree: '',
        questionFour: '',
    });

    useEffect(() => {
        console.log(formAnswers);
    }, [formAnswers])

    return(
        <>
            <div className="w-screen h-dvh bg-tristesse-0 flex flex-col pt-8 overflow-hidden">
                <div className={`flex flex-col gap-y-4 items-center ${page === Page.accountSetup ? 'hidden' : ''} `}>
                    <Logo variant="primary" className="size-16 text-selago-100" />

                    <div className="flex flex-row items-center w-[75%] max-w-[820px] gap-x-4 gap-y-7">
                        <div className="w-[50%] h-[3px] bg-selago-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]"/>
                        <div className={`w-[50%] h-[3px] rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)] ${page !== Page.signup ? 'bg-selago-0' : 'bg-davys-grey-0'} transition-all duration-200`}/>
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className={`w-[50%] h-[3px] ${index < questionNo - 1 ? 'bg-selago-0' : 'bg-davys-grey-0'} rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)] transition-all duration-200`} />
                        ))}
                    </div>
                </div>

                {page === Page.accountSetup && (
                    <AccountSetup setPage={setPage} email={formAnswers.email} formAnswers={formAnswers}/>
                )}

                {page === Page.questionnaire && (
                    <QuestionnairePage setPage={setPage} questionNo={questionNo} setQuestionNo={setQuestionNo} formAnswers={formAnswers} setFormAnswers={setFormAnswers}/>
                )}

                {page === Page.signup && (
                    <SignUpPage setPage={setPage} formAnswers={formAnswers} setFormAnswers={setFormAnswers}/>
                )}
            </div> 
        </>
    )
}

export default SignUp