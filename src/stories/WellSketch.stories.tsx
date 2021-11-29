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

export const Casing = Template.bind({});
Casing.args = {
  elements: ['casing'],
};

export const Liner = Template.bind({});
Liner.args = {
  elements: ['liner'],
};
