
function Portal() {
    return (
        <div className="w-screen h-dvh bg-tristesse-0 flex flex-col pt-8">
            <div className="flex flex-col gap-y-4 items-center">
                <img className="w-16 h-16" src="/svg/33.svg" alt="Logo" />

                <div className="flex gap-x-3 items-center w-[320px]">
                    <div className="w-full h-[3px] bg-white rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]" />
                    <div className="w-full h-[3px] bg-white rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]" />
                </div>
            </div>

            <div className='flex flex-col gap-y-4 items-center justify-center w-full h-full'>
                <button>Sign-Up</button>
                <button>Login</button>
            </div>
        </div>
    )
}

export default Portal