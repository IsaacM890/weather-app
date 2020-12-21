import Searchinput from './Searchinput';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/SearchInput',
  component: Searchinput,
  argTypes: {},
};

const Template = (args) => <Searchinput {...args} />;

export const searchinput = Template.bind({});
searchinput.args = {
  width: '30%',
  height: '25px',
  border: 'solid 1px #ccc',
  radius: '40px',
  placeholder: 'Type Here ...',
};
