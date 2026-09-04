
import { ArrowRight, ArrowLeft } from "flowbite-react-icons/outline";

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Checkbox } from "@/components/ui/checkbox"

import { Page } from '@/portal/Portal';
import { type FormAnswers } from '@/portal/SignUp';

interface QuestionnairePageProps {
    setPage: React.Dispatch<React.SetStateAction<Page>>;
    questionNo: number;
    setQuestionNo: React.Dispatch<React.SetStateAction<number>>;

    formAnswers: FormAnswers;
    setFormAnswers: React.Dispatch<React.SetStateAction<FormAnswers>>;
}

function QuestionnairePage({ setPage, questionNo, setQuestionNo, formAnswers, setFormAnswers } : QuestionnairePageProps) {

    const questions: string[] = [
        'What unique value or insight can you contribute to the community?',
        'What is the primary challenge you are working to solve or scale in your business right now?',
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
            setQuestionNo(prev => prev + 1);
        } else {
            setQuestionNo(prev => prev + 1);
            setPage(Page.detailConfirmation);
        }
    };

    const handleCheckboxChange = (checked: boolean | "indeterminate", value: string) => {
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

            <div className="flex flex-col items-center justify-center w-full h-[25%] gap-y-2.5">
                <div onClick={handlePrevQuestion} className="pointer-events-auto">
                    <ArrowLeft className="w-6 h-6 hover:text-schiava-blue-light text-selago-0 border-2 rounded-full mt-2 transition-all duration-200 hover:cursor-pointer" />
                </div>
            </div>
        </>
    );
}

export default QuestionnairePage