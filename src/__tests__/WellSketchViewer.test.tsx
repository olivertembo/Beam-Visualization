/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { WellSketchViewer } from '..';

const elementProps = {
  depthFrom: 0,
  depthTo: 0,
  widthFrom: 0,
  widthTo: 0,
  onDepthChange: () => {},
  onWidthChange: () => {},
  onError: () => {},
};

test('renders well sketch', () => {
  const { getByText } = render(
    <WellSketchViewer data={[{ shape: 'casing' }]} {...elementProps} />
  );
  expect(getByText('casing shape')).toBeInTheDocument();
});
