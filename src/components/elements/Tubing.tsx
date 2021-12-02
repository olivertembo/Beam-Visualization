interface Props {
  index: number;
}

const Tubing = ({ index }: Props) => (
  <g>
    <path stroke="blue" strokeWidth="1" d={`M 10 10 L 10 ${index * 20}`} />
    <path stroke="blue" strokeWidth="1" d={`M 100 10 L 100 ${index * 20}`} />
  </g>
);

export default Tubing;
