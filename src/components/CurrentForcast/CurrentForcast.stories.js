import CurrentForcast from './CurrentForcast';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/CurrentForcast',
  component: CurrentForcast,
  argTypes: {
    color: { control: 'color' },
    backgroundcolor: { control: 'color' },
  },
};

const Template = (args) => <CurrentForcast {...args} />;

export const example = Template.bind({});
example.args = {
  color: 'grey',
  width: '40px',
  borderradius: '10px',
};
