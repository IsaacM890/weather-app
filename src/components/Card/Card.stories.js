import Card from './Card';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    backgroundcolor: { control: 'color' },
  },
};

const Template = (args) => <Card {...args} />;

export const Example = Template.bind({});
Example.args = {
  backgroundcolor: 'rgba(255, 255, 255, 0.3)',
  width: '110px',
  minwidth: '110px',
  height: '18vh',
  margin: '3px',
  borderradius: '5px',
};
