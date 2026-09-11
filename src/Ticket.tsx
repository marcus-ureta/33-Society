import { buttonVariants } from '@/components/ui/button.tsx'
import { cn } from '@/lib/utils.ts'
import { Button } from "@/components/ui/button"

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { Logo } from '@/components/logos/Logo.tsx'

import { Upload } from "flowbite-react-icons/outline";


function Ticket() {



    return(
        <div className='w-full min-h-dvh bg-tristesse-0 flex flex-row'>
            {/* QR CODES */}
            <div className='hidden sm:flex sm:flex-4 flex-col items-center w-full min-h-0'>


                {/* Logo / Header */}
                <div className='border-b-2 border-selago-0 pt-[24px] pb-[16px] flex flex-col items-center w-full'>
                    <Logo
                        variant='horizontal'
                        className='text-selago-0 sm:w-48 md:w-64 h-auto'
                    />
                </div>

                {/* QR CODE AREA */}
                <div className="flex-1 w-full h-dvh flex items-center justify-center px-4">
                    <div className="flex flex-wrap justify-center items-center gap-[clamp(1rem,4vw,2rem)]">

                        {/* QR CODE 1 */}
                        <div className="w-[clamp(7rem,30vw,16rem)] flex flex-col items-center gap-3">

                            {/* Logo */}
                            <div className="w-full aspect-[3/1] flex items-center justify-center overflow-hidden">
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Bank_of_the_Philippine_Islands_logo.svg/250px-Bank_of_the_Philippine_Islands_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=en.wikipedia.org&utm_content=thumbnail" alt="BPI" className="block max-w-full max-h-full w-auto h-auto object-contain"/>
                            </div>

                            {/* QR */}
                            <div className="size-[clamp(4rem,min(32vw,24vh),16rem)] bg-amber-500" />

                        </div>

                        {/* QR CODE 2 */}
                        <div className="w-[clamp(7rem,30vw,16rem)] flex flex-col items-center gap-3">

                            {/* Logo */}
                            <div className="w-full aspect-[3/1] flex items-center justify-center overflow-hidden">
                                <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/BDO_Unibank_%28logo%29.svg/500px-BDO_Unibank_%28logo%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20110323130330l" alt="BDO" className="block max-w-full max-h-full w-auto h-auto object-contain"/>
                            </div>

                            {/* QR */}
                            <div className="size-[clamp(4rem,min(32vw,24vh),16rem)] bg-amber-500" />

                        </div>

                    </div>
                </div>

            </div>

            {/* Input Field */}
            <div className='flex flex-6 flex-col bg-schiava-blue-dark sm:bg-schiava-blue items-center px-[16px] pt-[32px] sm:p-[32px] text-selago-0 font-bold justify-start pb-[16px]'>
                <h1 className="font-['Cochin'] text-[1.5rem] sm:text-[clamp(1.8rem,3.5vw,4rem)] sm:mx-[10%] text-center">GET YOUR ONE PASS TICKET NOW</h1>

                <div className="flex flex-wrap justify-center items-center gap-[clamp(1rem,4vw,2rem)] block sm:hidden mt-[24px]">

                    {/* QR CODE 1 */}
                    <div className="w-[clamp(7rem,30vw,16rem)] flex flex-col items-center gap-3">

                        {/* Logo */}
                        <div className="w-full aspect-[3/1] flex items-center justify-center overflow-hidden">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Bank_of_the_Philippine_Islands_logo.svg/250px-Bank_of_the_Philippine_Islands_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=en.wikipedia.org&utm_content=thumbnail" alt="BPI" className="block max-w-full max-h-full w-auto h-auto object-contain drop-shadow-lg"/>
                        </div>

                        {/* QR */}
                        <div className="size-[clamp(6rem,25vw,16rem)] bg-amber-500" />

                    </div>

                    {/* QR CODE 2 */}
                    <div className="w-[clamp(7rem,30vw,16rem)] flex flex-col items-center gap-3">

                        {/* Logo */}
                        <div className="w-full aspect-[3/1] flex items-center justify-center overflow-hidden">
                            <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/BDO_Unibank_%28logo%29.svg/500px-BDO_Unibank_%28logo%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20110323130330l" alt="BDO" className="block max-w-full max-h-full w-auto h-auto object-contain"/>
                        </div>

                        {/* QR */}
                        <div className="size-[clamp(6rem,25vw,16rem)] bg-amber-500" />

                    </div>

                </div>

                <form className="w-[95%] sm:mx-[10%] mt-auto mb-auto max-w-[860px]">
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

                    <div className="mt-[16px]">
                        <Input id="picture" type="file" className="hidden"/>

                        <label htmlFor="picture" className="flex w-full h-10 items-center justify-center gap-2 rounded-xl border border-slate-600 bg-tristesse-0 text-white font-['Aileron'] font-semibold text-sm cursor-pointer transition-all duration-300 hover:bg-tristesse-50">
                            Upload your file
                            <Upload className="h-5 w-5"/>
                        </label>
                    </div>


                    <h3 className='text-center mt-[8px]'>Make sure that the reference number is visible</h3>
                </form>
            </div>
        </div>
    )
}

export default Ticket