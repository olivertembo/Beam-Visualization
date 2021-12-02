/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { WellSketchViewer } from '..';
import wellSketchProps from '../mocks/wellSketch1';

const elementProps = {
  top: 0,
  bottom: 0,
  colour: 'light grey',
  shoe: false,
  fill: false,
  size: 0,
  weight: 0,
  parent_weight: 0,
  ID: 0,
  OD: 0,
  parent_OD: 0,
  parent_ID: 0,
  tubular_OD: 0,
  internal_OD: 0,
  external_OD: 0,
  crossover_OD: 0,
};

test('renders well sketch', () => {
  const { getByText } = render(<WellSketchViewer {...wellSketchProps} />);
  expect(getByText('casing shape')).toBeInTheDocument();
});
