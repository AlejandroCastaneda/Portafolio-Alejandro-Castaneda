export function Title({title}: {title:string}) {
    return <h1 className="font-bold text-[37px]">{title}</h1>
}

export function Subtitle({subtitle}: {subtitle:string}) {
    return <h2 className="font-bold text-center text-[32px]">{subtitle}</h2>
}

export function PrincipalText({text}: {text:string}) {
    return <h3 className="font-regular text-[15px]">{text}</h3>
}

export function Text({text}: {text:string}) {
    return <h3 className="font-medium text-[18px]">{text}</h3>
}