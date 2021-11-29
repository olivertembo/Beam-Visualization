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

const elementProps = {
  depthFrom: 0,
  depthTo: 0,
  widthFrom: 0,
  widthTo: 0,
  onDepthChange: () => {},
  onWidthChange: () => {},
  onError: () => {},
};

export const Casing = Template.bind({});
Casing.args = {
  data: [{ shape: 'casing' }],
  ...elementProps,
};

export const Liner = Template.bind({});
Liner.args = {
  data: [{ shape: 'liner' }],
  ...elementProps,
};
