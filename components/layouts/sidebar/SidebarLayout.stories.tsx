import { ComponentMeta, ComponentStory } from '@storybook/react';
import SidebarLayout, { ISidebarLayout } from './SidebarLayout';
import { mockSidebarLayoutProps } from './SidebarLayout.mocks';

export default {
  title: 'cards/SidebarLayout',
  component: SidebarLayout,
  argTypes: {
    backgroundColor: {},
  },
} as ComponentMeta<typeof SidebarLayout>;

const Template: ComponentStory<typeof SidebarLayout> = (args) => (
  <SidebarLayout {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSidebarLayoutProps.base,
} as ISidebarLayout;