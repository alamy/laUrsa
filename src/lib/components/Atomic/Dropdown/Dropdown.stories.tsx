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
        id: '01',
        Option:  [
            {
                label: 'teste 1',
                value: '1'
            },
            {
                label: 'teste 2',
                value: '2'
            }
        ],
    }
} as Meta<DropdownProps>

export const Default: StoryObj<DropdownProps> = {
    args: {},
    argTypes: {}
}

