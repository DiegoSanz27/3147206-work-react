export default function Input({
    label, 
    type = "text",
    ...props
}){
    // cuerpo de la funcion 
    return(
        // contenedor del input que se exporta con label, cuerpo, y Feedback message
        <div className="w-[320px]">
            {/* label */}
            <label 
                className="
                    block
                    text-caption
                    mb-1
                    text-text-primary
                "
                >
                {label}
            </label>
            {/* contenedor del input */}
            <div>

                {/* area interactiva invisible de un input 48px */}

                <div 
                    className="
                        absolute
                        inset-0

                
                    "
                    onMouseDown={(e) => {
                        e.preventDefault();
                        e.currentTarget.nextSibling.focus();
                    }}
                    >



                </div>

                {/* area visual del input */}
                <input
                    className="
                        relative
                        w-full
                        h-12
                        rounded-md
                        border-border
                        px-4
                        text-base

                        focus:outline-none
                        focus:ring-2
                        focus:ring-focus-ring
                        focus:border-focus-border
                    "
                    {...props}
                    >
            </input>
            </div>
            {/* Feedback message */}
            <div>   
        </div>
        </div>
    );
};