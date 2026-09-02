
function Portal() {
    return (
        <div className="w-screen h-dvh bg-tristesse-0 flex justify-center pt-8">
            <div className="flex flex-col gap-y-6 items-center">
                <div className="w-16 h-16 bg-red-800 rounded-full" />

                <div className="flex gap-x-3 items-center w-[320px]">
                    <div className="w-full h-[3px] bg-white rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]" />
                    <div className="w-full h-[3px] bg-white rounded-full shadow-[0_0_16px_1px_var(--color-schiava-blue-dark)]" />
                </div>
            </div>
        </div>
    )
}

export default Portal