
import { buttonVariants } from './components/ui/button.tsx'
import { cn } from './lib/utils'

import { ArrowRight, ArrowLeft } from "flowbite-react-icons/outline";
import { Logo } from '@/components/logos/Logo.tsx'

import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { countries } from './utils/countries.ts'
import { useState } from 'react';

import crown from '/svg/CROWN_CROPPED.svg';

const Page = {
    password: 'Password',
    portal: 'Portal',

    signup: 'Signup',
    questionnaire: 'Questionnaire',
    accountSetup: 'AccountSetup',
    congratulations: 'Congratulations',

    login: 'Login',
} as const;

type Page = typeof Page[keyof typeof Page];


function PasswordPage({setPage} : {setPage : React.Dispatch<React.SetStateAction<Page>>}){
    return(
        <>
            <div className="flex flex-col gap-y-4 items-center">
                <Logo variant="primary" className="size-16 text-selago-100" />

                <div className="flex gap-x-3 items-center w-[320px]">
                    <div className="w-full h-[3px] bg-davys-grey-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]" />
                    <div className="w-full h-[3px] bg-davys-grey-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]" />
                </div>
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-center w-full h-[80%] gap-x-2.5 gap-y-2.5'>
                <input name='password'placeholder='Password' className="border-b-[1px] border-davys-grey-0 text-[2rem] text-davys-grey-0 font-['instrument-serif'] italic pl-[8px]" />

                <ArrowRight className="w-6 h-6 text-davys-grey-0 hover:text-selago-0 border-2 rounded-full mt-2 transition-all duration-200 hover:cursor-pointer" onClick={() => setPage(Page.portal)}/>
            </div>
        </>
    )
}


function LoginPage({setPage} : {setPage : React.Dispatch<React.SetStateAction<Page>>}) {
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

                <div className='flex flex-col items-center justify-center w-full h-[10%] gap-y-2.5' onClick={() => setPage(Page.portal)}>
                    <ArrowLeft className="w-6 h-6 hover:text-schiava-blue-light text-selago-0 border-2 rounded-full mt-2 transition-all duration-200 hover:cursor-pointer"/>
                </div>
                
            </div>
        </>
    )
}


// |____________________________________| \\
// |------------------------------------| \\
// |------   FULL SIGN UP PAGE    ------| \\
// |------------------------------------| \\
// |____________________________________| \\


function SignUpPage({setPage} : {setPage : React.Dispatch<React.SetStateAction<Page>>}) {

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


                <div className='flex flex-col items-center justify-center h-[80%] gap-y-4 sm:gap-y-8 max-w-none prose mb-0 mx-[5%]'>
                    
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

function QuestionnairePage({setPage} : {setPage : React.Dispatch<React.SetStateAction<Page>>}){

    const [questionNo, setQuestionNo] = useState<number>(1);
    const [inputValue, setInputValue] = useState('');

    const questions: string[] = [
        'What unique value or insight can you contribute to the community?',
        'What is the primary challenge you are working to solve or scale in your business right now?',
        'What is your current average monthly revenue',
        'Society 33 is a community of dedicated founders actively investing in scaling their businesses. If accepted, are you financially prepared to invest in your membership spot?',
    ]

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

    const handleNextQuestion = (input : string) => {
        console.log('firing function!');

        setQuestionnaireAnswers((prevQues) => 
            prevQues.map((ques) => 
                ques.questionNo === questionNo ? {
                    ...ques,
                    answer: input
                } : ques
            )
        )

        console.log(questionnaireAnswers);

        if(questionNo <= 3) setQuestionNo(prev => (prev <= questions.length ? prev + 1 : prev))
        else if(questionNo > 1) setPage(Page.accountSetup);
    }

    const handleCheckboxChange = (checked: boolean | "indeterminate", value : string) => {
        if (checked === true) {
            handleNextQuestion(value);
        }
    };

    const handlePrevQuestion = () => {
        if(questionNo > 1) setQuestionNo(prev => (prev <= questions.length ? prev - 1 : prev))
        else setPage(Page.signup);
    }

    return(
        <>
            <div className="w-screen h-dvh bg-tristesse-0 flex flex-col pt-8">
                <div className="flex flex-col gap-y-4 items-center">
                    <Logo variant="primary" className="size-16 text-selago-100" />

                    <div className="flex flex-row items-center w-[75%] max-w-[820px] gap-x-4 gap-y-7">
                        <div className="w-[50%] h-[3px] bg-selago-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]"/>
                        <div className="w-[50%] h-[3px] bg-selago-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]"/>
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className={`w-[50%] h-[3px] ${index < questionNo - 1 ? 'bg-selago-0' : 'bg-davys-grey-0'} rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)] transition-all duration-200`} />
                        ))}
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center w-full h-[80%] gap-y-4 sm:gap-y-12 max-w-none prose'>
                    
                    <h1 className="font-['Cochin'] font-bold text-selago-100 text-3xl sm:text-4xl mx-12 text-center max-w-[1068px]">
                        {questions[questionNo - 1]}
                    </h1>

                    {questionNo <= 2 && (
                        <div className='flex flex-col sm:flex-row items-center justify-center gap-x-2.5 gap-y-2.5 w-full'>
                            <input name='answer' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Your Answer' className="border-b-[1px] border-davys-grey-0 text-[2rem] text-davys-grey-0 font-['instrument-serif'] italic pl-2 w-[90%] max-w-[660px] mb-0" />

                            <div onClick={() => handleNextQuestion(inputValue)} className='pointer-events-auto'>
                                <ArrowRight className="w-6 h-6 text-davys-grey-0 hover:text-selago-0 border-2 rounded-full mt-2 transition-all duration-200 hover:cursor-pointer" />
                            </div>
                        </div>
                    )}

                    {questionNo === 3 && (
                        <FieldGroup className="grid grid-rows-4 items-center justify-center gap-y-9 max-w-[512px]">
                            <Field orientation="horizontal" className="w-fit justify-center">
                                <Checkbox id="5k" name="under_5k" className="hover:cursor-pointer size-6 border-selago-0 text-selago-100 mr-1" onCheckedChange={(checked) => handleCheckboxChange(checked, "Under $5k")}/>
                                <FieldLabel htmlFor="5k" className="hover:cursor-pointer text-[1.05rem] text-selago-100 font-['Aileron'] font-semibold">
                                    Under $5k
                                </FieldLabel>
                            </Field>

                            <Field orientation="horizontal" className="w-fit justify-center">
                                <Checkbox id="5k_10k" name="5k_10k" className="hover:cursor-pointer size-6 border-selago-0 text-selago-100 mr-1" onCheckedChange={(checked) => handleCheckboxChange(checked, "$5k - $10k")}/>
                                <FieldLabel htmlFor="5k_10k" className="hover:cursor-pointer text-[1.05rem] text-selago-100 font-['Aileron'] font-semibold">
                                    $5k - $10k
                                </FieldLabel>
                            </Field>

                            <Field orientation="horizontal" className="w-fit justify-center">
                                <Checkbox id="10k_50k" name="10k_50k" className="hover:cursor-pointer size-6 border-selago-0 text-selago-100 mr-1" onCheckedChange={(checked) => handleCheckboxChange(checked, "$10k - $50k")}/>
                                <FieldLabel htmlFor="10k_50k" className="hover:cursor-pointer text-[1.05rem] text-selago-100 font-['Aileron'] font-semibold">
                                    $10k - $50k
                                </FieldLabel>
                            </Field>

                            <Field orientation="horizontal" className="w-fit justify-center">
                                <Checkbox id="50k" name="50k" className="hover:cursor-pointer size-6 border-selago-0 text-selago-100 mr-1" onCheckedChange={(checked) => handleCheckboxChange(checked, "$50k+")}/>
                                <FieldLabel htmlFor="50k" className="hover:cursor-pointer text-[1.05rem] text-selago-100 font-['Aileron'] font-semibold">
                                    $50k+
                                </FieldLabel>
                            </Field>
                        </FieldGroup>
                    )}

                    {questionNo === 4 && (
                        <FieldGroup className="grid grid-rows-4 items-center justify-center gap-y-9 max-w-[512px]">
                            <Field orientation="horizontal" className="w-fit justify-center">
                                <Checkbox id="offer_accepted" name="offer_accepted" className="hover:cursor-pointer size-6 border-selago-0 text-selago-100 mr-1" onCheckedChange={(checked) => handleCheckboxChange(checked, "Yes, I am ready to invest")}/>
                                <FieldLabel htmlFor="offer_accepted" className="hover:cursor-pointer text-[1.05rem] text-selago-100 font-['Aileron'] font-semibold">
                                    Yes, I am ready to invest
                                </FieldLabel>
                            </Field>

                            <Field orientation="horizontal" className="w-fit justify-center">
                                <Checkbox id="offer_declined" name="offer_declined" className="hover:cursor-pointer size-6 border-selago-0 text-selago-100 mr-1" onCheckedChange={(checked) => handleCheckboxChange(checked, "No, not at this time")}/>
                                <FieldLabel htmlFor="offer_declined" className="hover:cursor-pointer text-[1.05rem] text-selago-100 font-['Aileron'] font-semibold">
                                    No, not at this time
                                </FieldLabel>
                            </Field>

                            <Field orientation="horizontal" className="w-fit justify-center">
                                <Checkbox id="offer_uncertain" name="offer_uncertain" className="hover:cursor-pointer size-6 border-selago-0 text-selago-100 mr-1" onCheckedChange={(checked) => handleCheckboxChange(checked, "Maybe, will think about it for some time")}/>
                                <FieldLabel htmlFor="offer_uncertain" className="hover:cursor-pointer text-[1.05rem] text-selago-100 font-['Aileron'] font-semibold">
                                    Maybe, will think about it for some time
                                </FieldLabel>
                            </Field>
                        </FieldGroup>
                    )}
                </div>

                <div className='flex flex-col items-center justify-center w-full h-[10%] gap-y-2.5'>
                    <div onClick={() => handlePrevQuestion()} className='pointer-events-auto'>
                        <ArrowLeft className="w-6 h-6 hover:text-schiava-blue-light text-selago-0 border-2 rounded-full mt-2 transition-all duration-200 hover:cursor-pointer"/>
                    </div>
                </div>
            </div>
        </>
    )
}

function AccountSetup({setPage} : {setPage : React.Dispatch<React.SetStateAction<Page>>}){
    return (
        <div className="relative w-screen h-dvh bg-tristesse-0 flex flex-col pt-8 overflow-hidden">

            <div className="flex flex-col gap-y-4 items-center mt-[5%]">
                <div className="w-full max-w-6xl flex items-center justify-center gap-8">
            
                <form className="w-full max-w-[548px] mx-[5%]">
                    <h1 className="text-white font-['Cochin'] text-5xl font-bold">Account Setup</h1>

                    <FieldGroup className="flex flex-col gap-y-6 my-[5%]">
                        <Field>
                            <Input id="email_address" type="email" placeholder="33society@gmail.com" required className="bg-tristesse-0 border-davys-grey-100 text-selago-0 !text-[17px] h-fit py-[6px] px-2"/>
                        </Field>

                        <Field>
                            <Input id="password" type="password" placeholder="Setup Your Password" required className="bg-tristesse-0 border-davys-grey-100 text-selago-0 !text-[17px] h-fit py-[6px] px-2"/>
                        </Field>
                    </FieldGroup>

                    <div className="flex justify-center mt-[4%]">
                        <Button onClick={() => setPage(Page.congratulations)} variant="outline" className={cn(buttonVariants({variant: "default", size: "lg",}),
                            "bg-schiava-blue text-white border-2 border-schiava-blue-dark py-5 px-12 rounded-[64px] hover:bg-schiava-blue-dark hover:scale-102 transition-all duration-300 font-['Aileron'] font-semibold text-[1.575rem]"
                        )}
                    >
                            Register Account
                        </Button>
                    </div>
                </form>

                    <Logo variant="stacked" className="hidden sm:block size-64 lg:size-96 xl:size-[28rem] text-selago-100 shrink-0"/>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[600px] max-h-[750px] overflow-hidden md:translate-y-[clamp(0px,4vw,500px)] pointer-events-none select-none">
                <img
                    src={crown}
                    className="absolute bottom-0 left-0 w-full h-auto select-none"
                />
            </div>

        </div>
    );  
}

function CongratulationsPage() {

    return(
        <div className="w-screen h-dvh bg-tristesse-0 flex flex-col pt-8">
            <div className='flex flex-col items-center justify-center w-full h-full'>
                
                <div className='flex flex-col max-w-[820px] items-center mx-[5%]'>

                    <h1 className="text-[2.5rem] sm:text-[3.5rem] text-selago-0 font-['Cochin'] text-center font-bold mb-[3%]">Congratulations! You may now proceed to the home page</h1>

                    <Button type="submit" variant="outline" className={cn(buttonVariants({ variant: "default", size: "lg" }),
                        "bg-schiava-blue text-white border-2 border-schiava-blue-dark py-5 px-12 rounded-[64px] hover:bg-schiava-blue-dark hover:scale-102 hover:cursor-pointer transition-all duration-300 font-['Aileron'] font-semibold text-[1.575rem] w-fit",
                    )}>
                        Go Home Page
                    </Button>

                </div>

            </div>
        </div>
    )
}

function Portal() {

    const [page, setPage] = useState<Page>(Page.password);

    return (

        <div className="w-screen h-dvh bg-tristesse-0 flex flex-col pt-8">

            {page === Page.password && (
                <PasswordPage setPage={setPage}/>
            )}

            {/* FROM THIS POINT FORWARD, FORCE USER TO ANSWER THE PASSWORD BEFORE PROCEEDING */}
            
            {page === Page.portal && (
                <>
                    <div className="flex flex-col gap-y-4 items-center">
                        <Logo variant="primary" className="size-16 text-selago-100" />

                        <div className="flex gap-x-3 items-center w-[320px]">
                            <div className="w-full h-[3px] bg-selago-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]" />
                            <div className="w-full h-[3px] bg-davys-grey-0 rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]" />
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center w-full h-[80%]'>

                        <div className='grid grid-rows-2 gap-y-4'>
                            <Button onClick={() => setPage(Page.signup)} variant="outline" className={cn(buttonVariants({ variant: "default", size: "lg" }),
                                            "bg-schiava-blue text-white border-2 border-schiava-blue-dark py-5 px-12 rounded-[64px] hover:bg-schiava-blue-dark hover:scale-102 hover:cursor-pointer transition-all duration-300 font-['Aileron'] font-semibold text-[1.575rem]",
                                        )}>
                                SIGN UP
                            </Button>

                            <Button onClick={() => setPage(Page.login)} variant="outline" className={cn(buttonVariants({ variant: "default", size: "lg" }),
                                            "bg-schiava-blue text-white border-2 border-schiava-blue-dark py-5 px-12 rounded-[64px] hover:bg-schiava-blue-dark hover:scale-102 hover:cursor-pointer transition-all duration-300 font-['Aileron'] font-semibold text-[1.575rem]",
                                        )}>
                                LOGIN
                            </Button>
                        </div>

                    </div>
                </>
            )}

            {page === Page.login && (
                <LoginPage setPage={setPage}/>
            )}


            {page === Page.signup && (
                <SignUpPage setPage={setPage}/>
            )}

            {page === Page.questionnaire && (
                <QuestionnairePage setPage={setPage}/>
            )}

            {page === Page.accountSetup && (
                <AccountSetup setPage={setPage}/>
            )}

            {page === Page.congratulations && (
                <CongratulationsPage/>
            )}

        </div>
    );
}

export default Portal