import { buttonVariants } from '@/components/ui/button.tsx'
import { cn } from '@/lib/utils.ts'
import { Button } from "@/components/ui/button"

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { Logo } from '@/components/logos/Logo.tsx'

import { Upload } from "flowbite-react-icons/outline";


function Ticket() {



    return(
        <div className='w-full h-dvh bg-tristesse-0 flex flex-row'>
            {/* QR CODES */}
            <div className='flex flex-6 sm:flex-4 flex-col items-center w-full hidden sm:block'>
                <div className='border-b-2 border-selago-0 pt-[24px] pb-[16px] flex flex-col items-center w-full'>
                    <Logo variant='horizontal' className='text-selago-0 sm:w-56 md:w-64 h-auto'/>
                </div>

                
            </div>

            {/* Input Field */}
            <div className='flex flex-6 flex-col bg-schiava-blue items-center px-[16px] pt-[32px] sm:p-[32px] text-selago-0 font-bold justify-center sm:justify-start'>
                <h1 className="font-['Cochin'] text-[clamp(1.5rem,3.5vw,4rem)] sm:mx-[10%] text-center">GET YOUR ONE PASS TICKET NOW</h1>

                <form className="w-[95%] sm:mx-[10%] mt-[32px] sm:mt-[3%] max-w-[860px]">
                    <FieldGroup>
                        <div className="grid grid-rows-2 gap-6">
                            <Field>
                                <FieldLabel htmlFor="full-name" className="text-selago-0 text-[1.05rem] sm:text-[1.25rem] font-['Aileron'] font-semibold">Full Name</FieldLabel>
                                <Input name='full-name' id="full-name" type="text" placeholder="Your Name" required className="bg-tristesse-0 border-davys-grey-100 text-davys-grey-0 font-['Aileron'] placeholder:font-['instrument-serif'] placeholder:italic pl-[8px] py-[16px] sm:py-[24px] text-[1.15rem]!"/>
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="email" className="text-selago-0 text-[1.05rem] sm:text-[1.25rem] font-['Aileron'] font-semibold">Email</FieldLabel>
                                <Input name='email' id="email" type="email" placeholder="john.doe@gmail.com" required className="bg-tristesse-0 border-davys-grey-100 text-davys-grey-0 font-['Aileron'] placeholder:font-['instrument-serif'] placeholder:italic pl-[8px] py-[16px] sm:py-[24px] text-[1.15rem]!"/>
                            </Field>
                        </div>
                    </FieldGroup>

                    <div className='flex flex-col gap-y-3 mt-[28px]'>
                        <div className='w-full flex justify-between'>
                            <h1 className="font-['Aileron'] text-xl">Quantity</h1>
                            <h2 className="font-['Aileron'] text-xl">x1</h2>
                        </div>

                        <div className='w-full flex justify-between'>
                            <h1 className="font-['Aileron'] text-xl">Subtotal</h1>
                            <h2 className="font-['Aileron'] text-xl">$499</h2>
                        </div>

                        <div className='w-full flex justify-between'>
                            <h1 className="font-['Aileron'] text-xl">Total</h1>
                            <h2 className="font-['Aileron'] text-xl">$499</h2>
                        </div>
                    </div>

                    <div className='flex justify-center mt-[32px]'>
                        <Button variant="outline" className={cn(buttonVariants({variant: "default", size: "lg",}),
                            "bg-schiava-blue text-white border-2 border-schiava-blue-dark py-5 px-12 rounded-[64px] hover:bg-schiava-blue-dark hover:scale-102 transition-all duration-300 font-['Aileron'] font-semibold text-[1.575rem] hover:cursor-pointer"
                        )}>
                            Upload your file
                            <Upload className='size-6'/>
                        </Button>
                    </div>

                    <h3 className='text-center mt-[8px]'>Make sure that the reference number is visible</h3>
                </form>
            </div>
        </div>
    )
}

export default Ticket