
import { ArrowRight, ArrowLeft } from "flowbite-react-icons/outline"

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Page } from '@/portal/Portal';
import { Label } from "@/components/ui/label"
import { type FormAnswers } from '@/portal/SignUp'

import MagneticButton from "@/components/magnetic_button/MagneticButton.tsx";


import { useState } from 'react';


interface QuestionnairePageProps {
    setPage: React.Dispatch<React.SetStateAction<Page>>;
    questionNo: number;
    setQuestionNo: React.Dispatch<React.SetStateAction<number>>;

    formAnswers: FormAnswers;
    setFormAnswers: React.Dispatch<React.SetStateAction<FormAnswers>>;
}

type AnimationState = "idle" | "prev-exit" | "next-exit" | "enter";

function QuestionnairePage({ setPage, questionNo, setQuestionNo, formAnswers, setFormAnswers } : QuestionnairePageProps) {
    const [animation, setAnimation] = useState<AnimationState>("enter");

    const questions: string[] = [
        'What unique value or insight can you contribute to the community?',
        'What company or business are you currently building?',
        'What is your current average monthly revenue',
        'Society 33 is a community of dedicated founders actively investing in scaling their businesses. If accepted, are you financially prepared to invest in your membership spot?',
    ];

    const questionKeys: Record<number, keyof Pick<FormAnswers, 'questionOne' | 'questionTwo' | 'questionThree' | 'questionFour' >> = {
        1: 'questionOne',
        2: 'questionTwo',
        3: 'questionThree',
        4: 'questionFour',
    };

    const inputValue = formAnswers[questionKeys[questionNo]];

    const saveAnswer = (input: string) => {
        const questionKey = questionKeys[questionNo];

        setFormAnswers((prev) => ({
            ...prev,
            [questionKey]: input,
        }));
    };

    const handleNextQuestion = (input: string) => {

        if (animation !== "idle") return;

        const trimmedInput = input.trim();

        if (!trimmedInput) {
            return;
        }

        const key = questionKeys[questionNo];

        setFormAnswers(prev => ({
            ...prev,
            [key]: trimmedInput,
        }));

        if (questionNo < questions.length) {
            setAnimation("next-exit");
        } else {
            setAnimation("next-exit");
            setPage(Page.accountSetup);
        }
    };

    const handleCheckboxChange = (checked: boolean | "indeterminate", value: string) => {
        if (checked === true) {
            handleNextQuestion(value);
        }
    };

    const handlePrevQuestion = () => {
        if (animation !== "idle") return;

        if (questionNo > 1) {
            setAnimation("prev-exit");
        } else {
            setPage(Page.signup);
        }
    };

    const handleAnimationEnd = () => {
        if (animation === "next-exit") {
            setTimeout(() => {
                setQuestionNo(prev => prev + 1);
                setAnimation("enter");
            }, 100);

            return;
        }

        if (animation === "prev-exit") {
            setTimeout(() => {
                setQuestionNo(prev => prev - 1);
                setAnimation("enter");
            }, 100);

            return;
        }

        if (animation === "enter") {
            setAnimation("idle");
        }
    };

    return (
        <>
            <div onAnimationEnd={handleAnimationEnd} className={`flex flex-col items-center justify-center w-full h-full gap-y-4 sm:gap-y-8 max-w-none prose ${animation === "next-exit" || animation === "prev-exit" ? "animate-slide-down" : ""} ${animation === "enter" ? "animate-slide-up" : ""}`}>

                <h1 className="font-['Cochin'] font-bold text-selago-100 text-3xl sm:text-4xl mx-12 text-center max-w-[1068px]">
                    {questions[questionNo - 1]}
                </h1>

                {questionNo <= 2 && (
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-x-2.5 gap-y-2.5 w-full mt-[16px]">

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
                    <RadioGroup className="flex flex-col gap-y-4 w-[90%] h-auto sm:h-[42%] max-w-[620px]" value={inputValue ?? ""} onValueChange={saveAnswer}>
                        {[
                            { id: "option-one", value: "Under $5k", label: "Under $5k" },
                            { id: "option-two", value: "Under $5k - $10k", label: "Under $5k - $10k" },
                            { id: "option-three", value: "Under $10k - $50k", label: "Under $10k - $50k" },
                            { id: "option-four", value: "Above $50k", label: "Above $50k" },
                        ].map((option) => (
                            <Label key={option.id} htmlFor={option.id} className={`radio-field text-2xl cursor-pointer transition-all duration-200
                                ${inputValue === option.value ? "border-selago-50! bg-transparent! text-selago-50" : ""}`}>

                            <RadioGroupItem value={option.value} id={option.id} className="sr-only"/>
                                {option.label}
                            </Label>
                        ))}

                        <MagneticButton message='Next Question' className='mt-[16px]' onClick={() => handleNextQuestion(inputValue)}/>
                    </RadioGroup>
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

                            <FieldLabel htmlFor="offer_accepted" className="hover:cursor-pointer text-[1.05rem] text-selago-100 font-['Aileron'] font-semibold">
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

            <div className="flex flex-col items-center justify-end w-full h-[25%] gap-y-2.5">
                <div className="pointer-events-auto mb-[32px]">
                    <ArrowLeft onClick={handlePrevQuestion} className="w-6 h-6 hover:text-schiava-blue-light text-selago-0 border-2 rounded-full mt-2 transition-all duration-200 hover:cursor-pointer" />
                </div>
            </div>
        </>
    );
}

export default QuestionnairePage