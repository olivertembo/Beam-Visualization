/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { WellSketchViewer } from '..';

test('renders well sketch', () => {
  const { getByText } = render(<WellSketchViewer elements={['casing']} />);
  expect(getByText('casing shape')).toBeInTheDocument();
});
