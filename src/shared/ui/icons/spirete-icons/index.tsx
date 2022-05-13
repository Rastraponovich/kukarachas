import { ComponentProps, Ref, forwardRef, ForwardedRef } from "react"

const Sprite = (props: ComponentProps<"svg">, svgRef: ForwardedRef<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 189 211"
            aria-hidden={true}
            {...props}
            ref={svgRef}
        >
            <use xlinkHref={`/assets/images/sprite.svg#${props.name}`}></use>
        </svg>
    )
}
export const SpriteIcons = forwardRef(Sprite)
