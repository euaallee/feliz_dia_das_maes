import { useEffect, useState } from "react"

const slides = [
    {
        type: "image",
        src: "/images/mae1.jpg",
        text: "Mãe, seu amor me guia todos os dias."
    },
    {
        type: "image",
        src: "/images/mae2.jpg",
        text: "Cada momento contigo é uma benção."
    },
    {
        type: "video",
        src: "/videos/mae3.mp4",
        text: "Te amo mais do que palavras podem dizer."
    },
    {
        type: "image",
        src: "/images/mae4.jpg",
        text: "Você é meu exemplo de força, coragem e ternura. 💗"
    },
    {
        type: "image",
        src: "/images/mae5.jpg",
        text: "Cada abraço seu tem o poder de curar qualquer dor."
    },
    {
        type: "image",
        src: "/images/mae6.jpg",
        text: "Com você, aprendi o verdadeiro significado do amor incondicional."
    },
    {
        type: "image",
        src: "/images/mae7.jpg",
        text: "Sou quem sou por tudo o que você é. Obrigado por existir, mãe!"
    }
]

export default function StoryCarousel() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((index + 1) % slides.length)
        }, 5000)
        return () => clearTimeout(timer);
    }, [index])

    const slide = slides[index]

    return (
        <div className="w-full max-w-md aspect-[9/16] bg-pink-50 rounded-2xl shadow-lg overflow-hidden relative">
            {slide.type === "image" ? (
                <img
                    src={slide.src}
                    alt="slide"
                    className="object-cover w-full h-full"
                />
            ) : (
                <video
                    src={slide.src}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                />
            )}
            <div className="absolute bottom-0 w-full bg-white/70 text-pink-700 p-4 text-center text-base font-medium">
                {slide.text}
            </div>
        </div>
    )
}