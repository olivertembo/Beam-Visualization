import { Casing, Tubing, WellSketchPiece } from './elements';

interface Props {
  data: WellSketchPiece[];
  title: string;
  depthFrom: number;
  depthTo: number;
  widthFrom: number;
  widthTo: number;
  onDepthChange: Function;
  onWidthChange: Function;
  onError: Function;
}

const WellSketchViewer = ({ title, data }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <svg width="100%" height="100%" viewBox="5 0 100 100">
        {data.map((element, index) => {
          switch (element.shape) {
            case 'casing':
              return <Casing key={`${element}${index}`} />;
            case 'tubing':
              return <Tubing key={`${element}${index}`} index={index} />;
            default:
              return <div key={`unknown${index}`}>unknown element</div>;
          }
        })}
      </svg>
    </div>
  );
};

export default WellSketchViewer;
