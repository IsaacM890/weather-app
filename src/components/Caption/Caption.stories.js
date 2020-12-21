import Caption from './Caption';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Caption',
  component: Caption,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <Caption {...args} />;

export const Example = Template.bind({});
Example.args = {
  text: 'Caption',
  fontweight: 'bold',
  fontsize: '20px',
};
