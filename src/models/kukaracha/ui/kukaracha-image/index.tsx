import Image from "next/image"
import { memo } from "react"

interface KukarachaImageProps {
    image?: string
}

export const KukarachaImage = memo(({ image = "default-kukaracha.svg" }: KukarachaImageProps) => {
    return (
        <div className="relative p-[27px] bg-white rounded-xl flex items-center justify-center">
            <Image src={`/assets/images/${image}`} height={441} width={366} />
        </div>
    )
})

KukarachaImage.displayName = "KukarachaImage"
