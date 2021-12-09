import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Casing, Plug } from '../components/elements';

export default {
  title: 'Elements/Casing',
  component: Casing,
} as ComponentMeta<typeof Casing>;

const Template: ComponentStory<typeof Casing> = () => <Casing />;

export const Default = Template.bind({});
export const withoutShoe = Template.bind({});
export const withoutCrossOver = Template.bind({});
