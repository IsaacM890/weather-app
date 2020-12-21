import ForecastList from './ForecastList';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/ForecastList',
  component: ForecastList,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <ForecastList {...args} />;

export const example = Template.bind({});
example.args = {};
