export default function Casing({
  shape = 'casing',
  title = '9.625in 53.5lb/ft casing',
  shoe = true,
  OD = 9.625,
  weight = 53.5,
  ID = 8.535,
  crossover = true,
  crossover_OD = 13.375,
  colour = 'grey',
  top = 0,
  bottom = 30,
  element,
  origin = { x: 0, y: 0 },
}: CasingProps) {
  // maxElementWidth is the 100% of the x axis while maxElementHeight is the 100% of the y axis.
  // All other elements will be rendered relative to these two values.

  const BoxViewProperties = {
    origin,
    width: 100,
    height: 100,
    maxElementWidth: 100,
    maxElementHeight: 100,
  };

  const ShoeProperties = {
    width: 0.5,
    height: 0.5,
    origin: { x: 0.25, y: 0.25 },
  };
  const CrossoverProperties = {
    width: 0.5,
    height: 0.5,
    origin: { x: 0.25, y: 0.25 },
  };
  const CasingProperties = {
    width: 0.5,
    height: 0.5,
    origin: { x: 0.25, y: 0.25 },
  };

  const maxElementWidth = OD + ShoeProperties.width * 2;
  const maxElementHeight = bottom - top;
  const originX = maxElementWidth / 2;
  const originY = maxElementHeight / 2;

  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox={` 0 0 ${maxElementWidth} ${maxElementHeight}`}
      >
        <g>
          {shoe && (
            <>
              {/* Shoe Left */}
              <path
                d={`M 0 ${maxElementHeight}
                 ${ShoeProperties.width} ${maxElementHeight}
                 ${ShoeProperties.width} ${
                  maxElementHeight - ShoeProperties.height
                }
                 z`}
                fill={colour}
                stroke={colour}
                strokeWidth=".1"
              />
              {/* Shoe Right */}
              <path
                d={`M ${
                  maxElementWidth - ShoeProperties.width
                } ${maxElementHeight}
                        ${maxElementWidth} ${maxElementHeight}
                        ${maxElementWidth - ShoeProperties.width} ${
                  maxElementHeight - ShoeProperties.height
                }
                        z`}
                fill={colour}
                stroke={colour}
                strokeWidth=".1"
              />
            </>
          )}

          {/* Vertical Line 1 */}
          <path
            d={`M ${ShoeProperties.width} 0 L ${ShoeProperties.width} ${maxElementHeight}`}
            stroke={colour}
            strokeWidth=".1"
          />
          {/* Vertical Line 2 */}
          <path
            d={`M ${maxElementWidth - ShoeProperties.width} 0 L ${
              maxElementWidth - ShoeProperties.width
            } ${maxElementHeight}`}
            stroke={colour}
            strokeWidth=".1"
          />
          {/* Horizontal Line */}
          <path
            d={`M 0 0 L ${maxElementWidth} 0`}
            stroke={colour}
            strokeWidth=".1"
          />
        </g>
      </svg>
    </>
  );
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
