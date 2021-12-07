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
    <div style={{ backgroundColor: '#000000', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: "#fff" }}>{title}</h1>
      <svg width="100%" height="100%" viewBox="0 0 300 300">
        {data.map((element, index) => {
          
          switch (element.shape) {
            case 'casing':
              return <Casing element={element} key={`${element}${index}`} origin={{ x: 0, y: 0 }} />;
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
