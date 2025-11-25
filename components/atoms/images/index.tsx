export function ImagePrincipal({ url }: { url: string }) {
    return (
        <img
            loading="lazy"
            src={url}
            className="object-cover absolute inset-0 size-full"
        />
    );
}

export function ImageMain({ url }: { url: string }) {
    return (
        <img
            loading="lazy"
            src={url}
            className="w-full h-full"
        />
    );
}

export function ImageSkill() {
    return (
        <img
            loading="lazy"
            src="Icons.png"
            className="shrink-0 self-start aspect-square w-[15px]"
        />
    );
}

export function ImageCard({ url }: { url: string }) {
    return (
        <img
            loading="lazy"
            src={url}
            className="aspect-square w-[68px]"
        />
    );
}

export function ImageBlog({ url }: { url: string }) {
    return (
        <img
            loading="lazy"
            src={url}
            className="w-full aspect-[1.03]"
        />
    );
}