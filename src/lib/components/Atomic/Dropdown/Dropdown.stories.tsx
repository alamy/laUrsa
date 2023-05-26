import { Meta, StoryObj } from '@storybook/react';
import { Dropdown, DropdownProps } from './Dropdown';

export default {
    title: 'Atmomic/Dropdown',
    component: Dropdown,
    args: {
        text: 'Label',
        size: 'md',
        disable: false,
        error: false,
        Option:  [
            {
                label: 'teste 1',
                vallue: '1'
            },
            {
                label: 'teste 2',
                vallue: '2'
            }
        ],
    }
} as Meta<DropdownProps>

export const Default: StoryObj<DropdownProps> = {
    args: {},
    argTypes: {}
}

