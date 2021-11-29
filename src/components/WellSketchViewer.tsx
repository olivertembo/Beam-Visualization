import { Casing } from './elements';

interface Props {
  elements: string[];
}

const WellSketchViewer = ({ elements }: Props) => {
  return (
    <div>
      <h1>Well sketch</h1>
      {elements.map((element, index) => {
        switch (element) {
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
