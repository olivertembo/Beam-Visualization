export default function Casing({
    shape = "casing",
    title = "9.625in 53.5lb/ft casing",
    shoe = true,
    OD = 9.625,
    weight = 53.5,
    ID = 8.535,
    crossover = true,
    crossover_OD = 13.375,
    colour = "grey",
    top = 0,
    bottom = 30,
    element,
    origin = { x: 0, y: 0 }
}: CasingProps) {

    // maxElementWidth is the 100% of the x axis while maxElementHeight is the 100% of the y axis.
    // All other elements will be rendered relative to these two values.
    let maxElementWidth = OD;
    let maxElementHeight = bottom - top;


    return (
        <>
            <svg width="100%" height="100%" viewBox={` ${origin.x} ${origin.y} ${maxElementWidth} ${maxElementHeight}`}>
                <g>
                    <CasingLine origin={{ x: 0, y: 0 }} offset={8.535} colour={colour} />
                    {shoe && (
                        <>
                            <Shoe origin={{ x: (-2.42 - 0.499), y: 30 }} offset={8.535} colour={colour} side="left" />
                            <Shoe origin={{ x: (8.535 + 0.9999), y: 30 }} offset={(8.535 + 9)} colour={colour} side="right" />
                        </>
                    )}

                </g>
            </svg>
        </>
    );
}


function CasingLine({ origin, height = 30, width = 0.545, colour = "black", offset = 0, }: CasingLine) {

    return (
        <>
            <path
                d={`
                    M ${0 + origin.x}  ${0 + origin.y}  
                    ${width + origin.x}  ${origin.y}
                    ${width + origin.x}  ${height + origin.y}
                    ${origin.x}  ${height + origin.y}
                    0,30 z`}
                fill={colour} stroke={colour} strokeWidth="0.01"
            />

            <path
                d={`
                    M ${origin.x + offset}  ${0 + origin.y}  
                    ${width + origin.x + offset}  ${origin.y}
                    ${width + origin.x + offset}  ${height + origin.y}
                    ${origin.x + offset}  ${height + origin.y}
                    ${origin.x + offset}  ${height + origin.y}
                    z`}
                fill={colour} stroke={colour} strokeWidth="0.01"
            />
        </>
    )
}


function Shoe({ origin, side = "left", height = 2.42, width = 2.42, offset = 0, colour = "black" }: ShoeProps) {
    if (side === "left") {
        return (
            <>
                <path
                    d={`
                        M ${0 + origin.x} ${height + origin.y}  
                        ${width + origin.x},${height + origin.y} 
                        ${width + origin.x},${0 + origin.y} z
                    `}
                    fill="" stroke={colour}
                />
            </>
        );
    } else {
        return (
            <>
                <path
                    d={`
                        M ${width + origin.x} ${height + origin.y}  
                        ${origin.x},${height + origin.y} 
                        ${origin.x},${origin.y} z
                    `}
                    fill="" stroke={colour}
                />
            </>
        );
    }

}

interface CasingLine {
    origin: Origin;
    offset: number;
    colour?: string;
    height?: number;
    width?: number;
}

interface ShoeProps {
    origin: Origin;
    colour?: string;
    offset: number;
    side: string;
    height?: number;
    width?: number;
}

interface CasingProps {
    shape?: string;
    title?: string;
    shoe?: boolean;
    OD?: number;
    weight?: number;
    ID?: number;
    crossover?: boolean;
    crossover_OD?: number;
    colour?: string;
    top?: number;
    bottom?: number;
    element: any;
    origin?: Origin;
}


interface Origin {
    x: number;
    y: number;
}