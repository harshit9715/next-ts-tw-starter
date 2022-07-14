import { ComponentMeta, ComponentStory } from '@storybook/react';
import PrimaryLayout, { IPrimaryLayout } from './PrimaryLayout';
import { mockPrimaryLayoutProps } from './PrimaryLayout.mocks';

export default {
  title: 'cards/PrimaryLayout',
  component: PrimaryLayout,
  argTypes: {
    backgroundColor: {},
  },
} as ComponentMeta<typeof PrimaryLayout>;

const Template: ComponentStory<typeof PrimaryLayout> = (args) => (
  <PrimaryLayout {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockPrimaryLayoutProps.base,
} as IPrimaryLayout;
