
import { buttonVariants } from '../components/ui/button.tsx'
import { cn } from '../lib/utils.ts'

import { ArrowRight, ArrowLeft } from "flowbite-react-icons/outline";
import { Logo } from '@/components/logos/Logo.tsx'

import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Page } from "./Portal";

import { countries } from '../utils/countries.ts'

import './Portal.css';

import { useEffect, useState } from 'react';

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
    setFormAnswers: React.Dispatch<React.SetStateAction<FormAnswers>>;
}

interface QuestionnairePageProps {
    setPage: React.Dispatch<React.SetStateAction<Page>>;
    questionNo: number;
    setQuestionNo: React.Dispatch<React.SetStateAction<number>>;

    setFormAnswers: React.Dispatch<React.SetStateAction<FormAnswers>>;
}


function SignUpPage({setPage, setFormAnswers} : SignUpPageProps){

    const [country, setCountry] = useState("ph");

    async function handleSubmission (event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Input Validation


        // Get Form Data
        const form = event.currentTarget;
        const formData = new FormData(form);

        const first_name = formData.get('form-first-name');
        const last_name = formData.get('form-last-name');
        
        const email = formData.get('form-email');
        const birthday = formData.get('form-birthday');

        const phone = formData.get('form-phone');

        const company = formData.get('form-company');
        const ig_handle = formData.get('form-igname');

        // Prepare for Next Page
        setFormAnswers(prev => ({
            ...prev,
            firstName: first_name?.toString()!,
            lastName: last_name?.toString()!,

            email: email?.toString()!,
            birthday: birthday?.toString()!,

            phone: phone?.toString()!,
            country: country,

            businessName: company?.toString()!,
            instagramHandle: ig_handle?.toString()!
        }));
        setPage(Page.questionnaire);
    }

    return(
        <>
            <div className='flex flex-col items-center justify-center h-[105%] gap-y-4 sm:gap-y-8 max-w-none prose mb-0 mx-[5%]'>
                <form onSubmit={handleSubmission} className="w-full max-w-[548px]">
                    <FieldGroup className='flex flex-col gap-y-9'>
                        
                        {/* First Name & Last Name */}
                        <div className="grid grid-cols-2 gap-4">
                            <Field>
                                <FieldLabel htmlFor="form-first-name" className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">First Name</FieldLabel>
                                <Input name='form-first-name' id="form-first-name" type="text" placeholder="John" required className="input-field"/>
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="form-last-name" className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">Last Name</FieldLabel>
                                <Input name='form-last-name' id="form-last-name" type="text" placeholder="Doe" required className="input-field"/>
                            </Field>
                        </div>

                        {/* Email and Birthday */}
                        <div className="grid grid-cols-2 gap-4">
                            <Field>
                                <FieldLabel htmlFor="form-email" className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">Email</FieldLabel>
                                <Input name='form-email' id="form-email" type="email" placeholder="john@example.com" required className="input-field"/>
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="form-birthday" className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">Birthday</FieldLabel>
                                <Input name='form-birthday' id="form-birthday" type="date" required className="input-field dark:[color-scheme:dark]"/>
                            </Field>
                        </div>

                        {/* Phone and Country */}
                        <div className="grid grid-cols-2 gap-4">
                            <Field>
                                <FieldLabel htmlFor="form-phone" className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">Phone</FieldLabel>
                                <Input name='form-phone' id="form-phone" type="tel" placeholder="+63 (555) 123-4567" required className="input-field"/>
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="form-country" className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">Country</FieldLabel>

                                <Select items={countries} defaultValue="ph" onValueChange={(value) => { if (value !== null) { setCountry(value); }}} required>
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
                                <FieldLabel htmlFor="form-company" className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">Company/Business Name</FieldLabel>
                                <Input name='form-company' id="form-company" type="text" placeholder="Acme Inc." required className="input-field"/>
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="form-igname" className="text-selago-0 text-[1rem] font-['Aileron'] font-semibold">Instagram Handle</FieldLabel>
                                <Input name='form-igname' id="form-igname" type="text" placeholder="@33_society" required className="input-field"/>
                            </Field>
                        </div>

                        {/* Submission Button */}
                        <div className='flex flex-col items-center justify-center mt-[4%]'>
                            <Button type='submit' variant="outline" className={cn(buttonVariants({ variant: "default", size: "lg" }),
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
        </>
    )
}

function QuestionnairePage({ setPage, questionNo, setQuestionNo, setFormAnswers } : QuestionnairePageProps) {

    const questions: string[] = [
        'What unique value or insight can you contribute to the community?',
        'What is the primary challenge you are working to solve or scale in your business right now?',
        'What is your current average monthly revenue',
        'Society 33 is a community of dedicated founders actively investing in scaling their businesses. If accepted, are you financially prepared to invest in your membership spot?',
    ];

    interface QuestionFormat {
        questionNo: number;
        answer: string;
    }

    const [questionnaireAnswers, setQuestionnaireAnswers] = useState<QuestionFormat[]>([
        {
            questionNo: 1,
            answer: ''
        },

        {
            questionNo: 2,
            answer: ''
        },

        {
            questionNo: 3,
            answer: ''
        },

        {
            questionNo: 4,
            answer: ''
        }
    ]);

    const inputValue = questionnaireAnswers.find( (ques) => ques.questionNo === questionNo)?.answer ?? '';

    const saveAnswer = (input: string) => {
        setQuestionnaireAnswers((prevAnswers) =>
            prevAnswers.map((ques) =>
                ques.questionNo === questionNo ? {
                    ...ques,
                    answer: input
                } : ques
            )
        );
    };

    const handleNextQuestion = (input: string) => {
        const trimmedInput = input.trim();

        if (!trimmedInput) {
            return;
        }

        const updatedAnswers = questionnaireAnswers.map((ques) =>
            ques.questionNo === questionNo ? {
                ...ques,
                answer: trimmedInput
            } : ques
        );

        setQuestionnaireAnswers(updatedAnswers);

        if (questionNo < questions.length) {
            setQuestionNo((prev) => prev + 1);
            return;
        }

        setFormAnswers(prev => ({
            ...prev,

            questionOne:
                updatedAnswers.find((answer) => answer.questionNo === 1)
                    ?.answer ?? '',

            questionTwo:
                updatedAnswers.find((answer) => answer.questionNo === 2)
                    ?.answer ?? '',

            questionThree:
                updatedAnswers.find((answer) => answer.questionNo === 3)
                    ?.answer ?? '',

            questionFour:
                updatedAnswers.find((answer) => answer.questionNo === 4)
                    ?.answer ?? '',
        }));
        setPage(Page.accountSetup);
    };

    const handleCheckboxChange = (
        checked: boolean | "indeterminate",
        value: string
    ) => {
        if (checked === true) {
            handleNextQuestion(value);
        }
    };

    const handlePrevQuestion = () => {
        if (questionNo > 1) {
            setQuestionNo((prev) => prev - 1);
        } else {
            setPage(Page.signup);
        }
    };

    return (
        <>
            <div className="w-screen h-dvh bg-tristesse-0 flex flex-col pt-8 overflow-hidden">
                <div className="flex flex-col items-center justify-center w-full h-[80%] gap-y-4 sm:gap-y-12 max-w-none prose">

                    <h1 className="font-['Cochin'] font-bold text-selago-100 text-3xl sm:text-4xl mx-12 text-center max-w-[1068px]">
                        {questions[questionNo - 1]}
                    </h1>

                    {questionNo <= 2 && (
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-2.5 gap-y-2.5 w-full">

                            <input name="answer" value={inputValue} onChange={(e) => saveAnswer(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleNextQuestion(inputValue);
                                    }
                                }}
                            placeholder="Your Answer" className="border-b-[1px] border-davys-grey-0 text-[2rem] text-davys-grey-0 font-['instrument-serif'] italic pl-2 w-[90%] max-w-[660px] mb-0"/>

                            <div onClick={() => handleNextQuestion(inputValue)} className={`pointer-events-auto ${!inputValue.trim() ? 'opacity-40 cursor-not-allowed' : ''}`}>
                                <ArrowRight className={`w-6 h-6 text-davys-grey-0 border-2 rounded-full mt-2 transition-all duration-200 ${inputValue.trim() ? 'hover:text-selago-0 hover:cursor-pointer' : 'cursor-not-allowed'}`}/>
                            </div>
                        </div>
                    )}

                    {questionNo === 3 && (
                        <FieldGroup className="grid grid-cols-2 grid-rows-2 items-center justify-items-center gap-y-9 max-w-[512px] translate-x-[13%]">

                            <Field orientation="horizontal" className="w-full justify-center">
                                <Checkbox id="5k" name="under_5k" className="hover:cursor-pointer size-6 border-selago-0 text-selago-100 mr-1"
                                    onCheckedChange={(checked) =>
                                        handleCheckboxChange(
                                            checked,
                                            "Under $5k"
                                        )
                                    }
                                />
                                <FieldLabel htmlFor="5k" className="hover:cursor-pointer text-[1.05rem] text-selago-100 font-['Aileron'] font-semibold">
                                    Under $5k
                                </FieldLabel>
                            </Field>

                            <Field orientation="horizontal" className="w-full justify-center">
                                <Checkbox id="5k_10k" name="5k_10k" className="hover:cursor-pointer size-6 border-selago-0 text-selago-100 mr-1"
                                    onCheckedChange={(checked) =>
                                        handleCheckboxChange(
                                            checked,
                                            "$5k - $10k"
                                        )
                                    }
                                />

                                <FieldLabel htmlFor="5k_10k" className="hover:cursor-pointer text-[1.05rem] text-selago-100 font-['Aileron'] font-semibold">
                                    $5k - $10k
                                </FieldLabel>
                            </Field>

                            <Field orientation="horizontal" className="w-full justify-center">
                                <Checkbox id="10k_50k" name="10k_50k" className="hover:cursor-pointer size-6 border-selago-0 text-selago-100 mr-1"
                                    onCheckedChange={(checked) =>
                                        handleCheckboxChange(
                                            checked,
                                            "$10k - $50k"
                                        )
                                    }
                                />

                                <FieldLabel htmlFor="10k_50k" className="hover:cursor-pointer text-[1.05rem] text-selago-100 font-['Aileron'] font-semibold">
                                    $10k - $50k
                                </FieldLabel>
                            </Field>

                            <Field orientation="horizontal" className="w-full justify-center">
                                <Checkbox id="50k" name="50k" className="hover:cursor-pointer size-6 border-selago-0 text-selago-100 mr-1"
                                    onCheckedChange={(checked) =>
                                        handleCheckboxChange(
                                            checked,
                                            "$50k+"
                                        )
                                    }
                                />

                                <FieldLabel htmlFor="50k" className="hover:cursor-pointer text-[1.05rem] text-selago-100 font-['Aileron'] font-semibold"
                                >
                                    $50k+
                                </FieldLabel>
                            </Field>

                        </FieldGroup>
                    )}

                    {questionNo === 4 && (
                        <FieldGroup className="grid sm:grid-cols-3 items-center justify-center gap-y-9 max-w-[880px]">

                            <Field orientation="horizontal" className="w-fit justify-center">
                                <Checkbox id="offer_accepted" name="offer_accepted" className="hover:cursor-pointer size-6 border-selago-0 text-selago-100 mr-1"
                                    onCheckedChange={(checked) =>
                                        handleCheckboxChange(
                                            checked,
                                            "Yes, I am ready to invest"
                                        )
                                    }
                                />

                                <FieldLabel htmlFor="offer_accepted" className="hover:cursor-pointer text-[1.05rem] text-selago-100 font-['Aileron'] font-semibold"
                                >
                                    Yes, I am ready to invest
                                </FieldLabel>
                            </Field>

                            <Field orientation="horizontal" className="w-fit justify-center">
                                <Checkbox id="offer_declined" name="offer_declined" className="hover:cursor-pointer size-6 border-selago-0 text-selago-100 mr-1"
                                    onCheckedChange={(checked) =>
                                        handleCheckboxChange(
                                            checked,
                                            "No, not at this time"
                                        )
                                    }
                                />

                                <FieldLabel htmlFor="offer_declined" className="hover:cursor-pointer text-[1.05rem] text-selago-100 font-['Aileron'] font-semibold">
                                    No, not at this time
                                </FieldLabel>
                            </Field>

                            <Field orientation="horizontal" className="w-fit justify-center">
                                <Checkbox id="offer_uncertain" name="offer_uncertain" className="hover:cursor-pointer size-6 border-selago-0 text-selago-100 mr-1"
                                    onCheckedChange={(checked) =>
                                        handleCheckboxChange(
                                            checked,
                                            "Maybe, will think about it for some time"
                                        )
                                    }
                                />

                                <FieldLabel htmlFor="offer_uncertain" className="hover:cursor-pointer text-[1.05rem] text-selago-100 font-['Aileron'] font-semibold">
                                    Maybe, will think about it for some time
                                </FieldLabel>
                            </Field>

                        </FieldGroup>
                    )}
                </div>

                <div className="flex flex-col items-center justify-center w-full h-[10%] gap-y-2.5">
                    <div onClick={handlePrevQuestion} className="pointer-events-auto">
                        <ArrowLeft className="w-6 h-6 hover:text-schiava-blue-light text-selago-0 border-2 rounded-full mt-2 transition-all duration-200 hover:cursor-pointer" />
                    </div>
                </div>
            </div>
        </>
    );
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
                <div className="flex flex-col gap-y-4 items-center">
                    <Logo variant="primary" className="size-16 text-selago-100" />

                    <div className="flex flex-row items-center w-[75%] max-w-[820px] gap-x-4 gap-y-7">
                        <div className="w-[50%] h-[3px] bg-selago-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]"/>
                        <div className={`w-[50%] h-[3px] rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)] ${page !== Page.signup ? 'bg-selago-0' : 'bg-davys-grey-0'} transition-all duration-200`}/>
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className={`w-[50%] h-[3px] ${index < questionNo - 1 ? 'bg-selago-0' : 'bg-davys-grey-0'} rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)] transition-all duration-200`} />
                        ))}
                    </div>
                </div>

                {page === Page.questionnaire && (
                    <QuestionnairePage setPage={setPage} questionNo={questionNo} setQuestionNo={setQuestionNo} setFormAnswers={setFormAnswers}/>
                )}

                {page === Page.signup && (
                    <SignUpPage setPage={setPage} setFormAnswers={setFormAnswers}/>
                )}
            </div> 
        </>
    )
}

export default SignUp