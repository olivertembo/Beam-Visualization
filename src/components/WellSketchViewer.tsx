import { Casing } from './elements';

interface Element {
  shape: string;
}
interface Props {
  data: Element[];
  depthFrom: number;
  depthTo: number;
  widthFrom: number;
  widthTo: number;
  onDepthChange: Function;
  onWidthChange: Function;
  onError: Function;
}

const WellSketchViewer = ({ data }: Props) => {
  return (
    <div>
      <h1>Well sketch</h1>
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
