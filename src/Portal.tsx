
function Portal(){
    return(
        <>
            <div className='w-screen h-dvh bg-tristesse-0 flex justify-center pt-8'>

                {/* LOGO AND PROGRESS BAR */}
                <div className='flex flex-col gap-y-6 items-center'>
                    <div className='w-16 h-16 bg-red-800 rounded-full'/>

                    <div className='flex flex-row gap-x-3 items-center w-[320px] h-[3px] overflow-clip'>
                        <div className='w-full h-full bg-selago-0 rounded-[10px]'/>
                        <div className='w-full h-full bg-selago-0 rounded-[10px]'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portal