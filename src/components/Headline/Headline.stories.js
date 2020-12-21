import Headline from './Headline';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Headline',
  component: Headline,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <Headline {...args} />;

export const Example = Template.bind({});
Example.args = {
  text: 'Headline',
  fontweight: 'bold',
  margin: '40px',
  fontsize:'40px'
};
