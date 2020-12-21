import Header from './Header';
import Headline from '../Headline/Headline';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    backgroundcolor: { control: 'color' },
  },
};

const Template = (args) => (
  <Header {...args}>
    <Headline fontsize={'18px'} text={'example'} />
  </Header>
);

export const Header1 = Template.bind({});
Header1.args = {
  backgroundcolor: 'red',
  padding: '10px',
  margin: '5px',
};
