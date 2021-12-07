
export default function Fish({ colour, origin = { x: 0, y: 0 } }: FishProps) {
    return (
        <>
            <path d="M98.9007 502C94.5272 502 90.7078 503.712 88.5821 505.176L84.3369 503.112C83.7472 502.825 82.8669 503.131 83.0176 503.57L84.193 507L83.0171 510.43C82.8664 510.87 83.7467 511.175 84.3364 510.888L88.5816 508.824C90.7073 510.288 94.5272 512 98.9007 512C105.583 512 111 508 111 507C111 506 105.583 502 98.9007 502ZM103.151 507.75C102.507 507.75 101.984 507.414 101.984 507C101.984 506.586 102.507 506.25 103.151 506.25C103.795 506.25 104.317 506.586 104.317 507C104.317 507.414 103.795 507.75 103.151 507.75Z" fill={colour} />
        </>
    );
}

interface FishProps {
    colour: string;
    origin: Origin;
}

interface Origin {
    x: number;
    y: number;
}
