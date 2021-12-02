import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WellSketchViewer } from '../';
import wellSketchProps from '../mocks/wellSketch1';

export default {
  title: 'Configurations/WellSketchViewer',
  component: WellSketchViewer,
} as ComponentMeta<typeof WellSketchViewer>;

const Template: ComponentStory<typeof WellSketchViewer> = (args) => (
  <WellSketchViewer {...args} />
);

export const Example_1 = Template.bind({});

Example_1.args = { ...wellSketchProps };
