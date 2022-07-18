import { ComponentMeta, ComponentStory } from '@storybook/react';
import Search, { ISearch } from './Search';
import { mockSearchProps } from './Search.mocks';

export default {
  title: 'widgets/Search',
  component: Search,
  argTypes: {
    backgroundColor: {},
  },
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockSearchProps.base,
} as ISearch;
