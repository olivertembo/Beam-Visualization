import { Casing, WellSketchPiece } from './elements';

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
      {data.map((element, index) => {
        switch (element.shape) {
          case 'casing':
            return <Casing key={`${element}${index}`} />;
          default:
            return <div key={`unknown${index}`}>unknown element</div>;
        }
      })}
    </div>
  );
};

export default WellSketchViewer;
