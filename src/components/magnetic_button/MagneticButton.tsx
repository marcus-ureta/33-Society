import { useRef } from "react";

import { buttonVariants } from '@/components/ui/button.tsx'
import { cn } from '@/lib/utils.ts'
import { Button } from "@/components/ui/button"

function MagneticButton({message, className = '', onClick = () => {}} : {message : string, className : string, onClick : React.MouseEventHandler<HTMLButtonElement>}) {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = buttonRef.current;

        if (!button) return;    

        const rect = button.getBoundingClientRect();

        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        button.style.transform = `translate(${x * 0.025}px, ${y * 0.07}px)`;
    };

    const handleMouseLeave = () => {
        const button = buttonRef.current;

        if (!button) return;

        button.style.transform = "translate(0, 0)";
    };

    return (
        <Button onClick={onClick} ref={buttonRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} variant="outline" className={cn(buttonVariants({variant: "default", size: "lg",}), "button-styling transition-transform duration-200 ease-out ", className)}>
            {message}
        </Button>
    );
}

export default MagneticButton
