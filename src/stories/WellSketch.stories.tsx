import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WellSketchViewer } from '../';

export default {
  title: 'Configurations/WellSketchViewer',
  component: WellSketchViewer,
} as ComponentMeta<typeof WellSketchViewer>;

const Template: ComponentStory<typeof WellSketchViewer> = (args) => (
  <WellSketchViewer {...args} />
);

const wellSketchProps = {
  depthFrom: 0,
  depthTo: 0,
  widthFrom: 0,
  widthTo: 0,
  onDepthChange: () => {},
  onWidthChange: () => {},
  onError: () => {},
};

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

export const Casing = Template.bind({});
Casing.args = {
  data: [{ ...elementProps, shape: 'casing', title: 'Casing Title' }],
  ...wellSketchProps,
};

export const Liner = Template.bind({});
Liner.args = {
  data: [{ ...elementProps, shape: 'liner', title: 'Casing Title' }],
  ...wellSketchProps,
};
