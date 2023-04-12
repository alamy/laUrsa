import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table } from './Table';

export default {
  title: 'Molecules/Table',
  component: Table,
  args: {
    typeTable: 'Default',
    header: ['#', 'First', 'Last', 'Handle'],
    Obj: [
      {
        1: '#',
        2: 'First',
        3: 'Last',
        4: 'Handle'
    }
  ]
}
} as ComponentMeta<typeof Table>
const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;
export const Default = Template.bind({});
 Default.args = {
    typeTable: 'Default',
}

export const HeaderDark = Template.bind({});
HeaderDark.args = {
  typeTable: 'HeaderDark',
}

export const Dark = Template.bind({});
Dark.args = {
  typeTable: 'Dark',
}