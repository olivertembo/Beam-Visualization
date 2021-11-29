import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Casing } from '../components/elements';

export default {
  title: 'Elements/Casing',
  component: Casing,
} as ComponentMeta<typeof Casing>;

const Template: ComponentStory<typeof Casing> = () => <Casing />;

export const Default = Template.bind({});
