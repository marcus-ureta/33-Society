import { buttonVariants } from '@/components/ui/button.tsx'
import { cn } from '@/lib/utils.ts'

import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { countries } from '@/utils/countries'


import { Page } from '@/portal/Portal';
import { type FormAnswers } from '@/portal/SignUp';

import { useState } from 'react';

import '@/portal/Portal.css'

interface DetailConfirmationProps {
    setPage: React.Dispatch<React.SetStateAction<Page>>;
    
    formAnswers: FormAnswers;
    setFormAnswers: React.Dispatch<React.SetStateAction<FormAnswers>>;
}

function DetailConfirmation({ setPage, formAnswers, setFormAnswers } : DetailConfirmationProps){

    const [country, setCountry] = useState(formAnswers.country);

    async function confirmDetails(event : React.FormEvent<HTMLFormElement>){
        event.preventDefault();

        // Input Validation


        // Get Form Data
        const form = event.currentTarget;
        const formData = new FormData(form);

        const firstName = formData.get('form-first-name')?.toString() ?? '';
        const lastName = formData.get('form-last-name')?.toString() ?? '';
        const email = formData.get('form-email')?.toString() ?? '';
        const birthday = formData.get('form-birthday')?.toString() ?? '';
        const phone = formData.get('form-phone')?.toString() ?? '';
        const company = formData.get('form-company')?.toString() ?? '';
        const instagramHandle = formData.get('form-igname')?.toString() ?? '';

        const questionOne = formData.get('form-questionOne')?.toString() ?? '';
        const questionTwo = formData.get('form-questionTwo')?.toString() ?? '';
        const questionThree = formData.get('questionThree')?.toString() ?? '';
        const questionFour = formData.get('questionFour')?.toString() ?? '';

        setFormAnswers(prev => ({
            ...prev,

            firstName,
            lastName,
            email,
            birthday,
            phone,
            country,

            businessName: company,
            instagramHandle,

            questionOne,
            questionTwo,
            questionThree,
            questionFour,
        }));
        setPage(Page.accountSetup);
    }

    return(
        <>
            <div className='w-full h-[80%] flex justify-center items-center overflow-hidden'>
                <div className='bg-tristesse-50 w-[60%] max-w-[690px] h-[80%] flex scrollable-container rounded-3xl border-2 border-tristesse-100 mx-[5%]'>
                    <div className='mx-[16px] my-[16px] w-[99%]'>
                        <div className='border-b-2 mb-[38px] border-selago-0'>
                            <h1 className="font-['Aileron'] font-bold text-[2rem] mb-[6px] text-selago-0">Submitted Details:</h1>
                        </div>

                        <form onSubmit={confirmDetails}>
                            <FieldGroup className='flex flex-col gap-y-6'>
                                <Field>
                                    <FieldLabel htmlFor="form-first-name" className="text-selago-0 text-[1.1rem] font-['Aileron'] font-semibold">First Name</FieldLabel>
                                    <Input name='form-first-name' id="form-first-name" type="text" placeholder="John" required className="input-field" defaultValue={formAnswers.firstName}/>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="form-last-name" className="text-selago-0 text-[1.1rem] font-['Aileron'] font-semibold">Last Name</FieldLabel>
                                    <Input name='form-last-name' id="form-last-name" type="text" placeholder="Doe" required className="input-field" defaultValue={formAnswers.lastName}/>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="form-email" className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">Email</FieldLabel>
                                    <Input name='form-email' id="form-email" type="email" placeholder="john@example.com" required className="input-field" defaultValue={formAnswers.email}/>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="form-birthday" className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">Birthday</FieldLabel>
                                    <Input name='form-birthday' id="form-birthday" type="date" required className="input-field dark:[color-scheme:dark]" defaultValue={formAnswers.birthday}/>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="form-phone" className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">Phone</FieldLabel>
                                    <Input name='form-phone' id="form-phone" type="tel" placeholder="+63 (555) 123-4567" required className="input-field" defaultValue={formAnswers.phone}/>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="form-country" className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">Country</FieldLabel>

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

                                <Field>
                                    <FieldLabel htmlFor="form-company" className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">Company/Business Name</FieldLabel>
                                    <Input name='form-company' id="form-company" type="text" placeholder="Acme Inc." required className="input-field" defaultValue={formAnswers.businessName}/>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="form-igname" className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">Instagram Handle</FieldLabel>
                                    <Input name='form-igname' id="form-igname" type="text" placeholder="@33_society" required className="input-field" defaultValue={formAnswers.instagramHandle}/>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="form-questionOne" className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">What unique value or insight can you contribute to the community?</FieldLabel>
                                    <Input name='form-questionOne' id="form-questionOne" type="text" placeholder="Your Answer" required className="input-field" defaultValue={formAnswers.questionOne}/>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="form-questionTwo" className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">What is the primary challenge you are working to solve or scale in your business right now?</FieldLabel>
                                    <Input name='form-questionTwo' id="form-questionTwo" type="text" placeholder="Your Answer" required className="input-field" defaultValue={formAnswers.questionTwo}/>
                                </Field>

                                <Field>
                                    <FieldLabel className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">
                                        What is your current average monthly revenue?
                                    </FieldLabel>

                                    <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-4">
                                        <label htmlFor="5k" className="flex cursor-pointer items-center justify-center gap-1">
                                            <input type="radio" id="5k" name="questionThree" value="Under $5k" defaultChecked={formAnswers.questionThree === "Under $5k"} className="radio-field"/>
                                            <span className="text-center text-selago-100 font-['Aileron'] font-semibold text-[0.95rem]">Under $5k</span>
                                        </label>

                                        <label htmlFor="5k_10k" className="flex cursor-pointer items-center justify-center gap-1">
                                            <input type="radio" id="5k_10k" name="questionThree" value="$5k - $10k" defaultChecked={formAnswers.questionThree === "$5k - $10k"} className="radio-field"/>
                                            <span className="text-center text-selago-100 font-['Aileron'] font-semibold text-[0.95rem]">$5k - $10k</span>
                                        </label>

                                        <label htmlFor="10k_50k" className="flex cursor-pointer items-center justify-center gap-1">
                                            <input type="radio" id="10k_50k" name="questionThree" value="$10k - $50k" defaultChecked={formAnswers.questionThree === "$10k - $50k"} className="radio-field"/>
                                            <span className="text-center text-selago-100 font-['Aileron'] font-semibold text-[0.95rem]">$10k - $50k</span>
                                        </label>

                                        <label htmlFor="50k" className="flex cursor-pointer items-center justify-center gap-1">
                                            <input type="radio" id="50k" name="questionThree" value="$50k+" defaultChecked={formAnswers.questionThree === "$50k+"} className="radio-field"/>
                                            <span className="text-center text-selago-100 font-['Aileron'] font-semibold text-[0.95rem]">$50k+</span>
                                        </label>
                                    </div>
                                </Field>

                                <Field>
                                    <FieldLabel className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">
                                        Society 33 is a community of dedicated founders actively investing in scaling their businesses. If accepted, are you financially prepared to invest in your membership spot?
                                    </FieldLabel>

                                    <div className="grid w-full grid-cols-3 gap-3">
                                        <label htmlFor="offer_accepted" className="flex cursor-pointer items-center justify-center gap-1">
                                            <input type="radio" id="offer_accepted" name="questionFour" value="Yes, I am ready to invest" defaultChecked={formAnswers.questionFour === "Yes, I am ready to invest"} className="radio-field"/>
                                            <span className="text-center text-selago-100 font-['Aileron'] font-semibold text-[0.95rem]">Yes</span>
                                        </label>

                                        <label htmlFor="offer_declined" className="flex cursor-pointer items-center justify-center gap-1">
                                            <input type="radio" id="offer_declined" name="questionFour" value="No, not at this time" defaultChecked={formAnswers.questionFour === "No, not at this time"} className="radio-field"/>
                                            <span className="text-center text-selago-100 font-['Aileron'] font-semibold text-[0.95rem]">No</span>
                                        </label>

                                        <label htmlFor="offer_uncertain" className="flex cursor-pointer items-center justify-center gap-1">
                                            <input type="radio" id="offer_uncertain" name="questionFour" value="Maybe, will think about it for some time" defaultChecked={formAnswers.questionFour === "Maybe, will think about it for some time"} className="radio-field"/>
                                            <span className="text-center text-selago-100 font-['Aileron'] font-semibold text-[0.95rem]">Maybe</span>
                                        </label>
                                    </div>
                                </Field>

                                <div className='flex flex-col items-center justify-center mt-[8px] mb-[16px]'>
                                    <Button type='submit' variant="outline" className={cn(buttonVariants({ variant: "default", size: "lg" }),
                                        "bg-schiava-blue text-white border-2 border-schiava-blue-dark py-5 px-12 rounded-[64px] hover:bg-schiava-blue-dark hover:scale-102 hover:cursor-pointer transition-all duration-300 font-['Aileron'] font-semibold text-[1.575rem]",
                                    )}>
                                        Confirm Details
                                    </Button>
                                </div>

                            </FieldGroup>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailConfirmation