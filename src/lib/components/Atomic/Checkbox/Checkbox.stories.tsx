import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';

export default {
    title: 'Atmomic/Checkbox',
    component: Checkbox,
    args: {
        text: 'Label',
        disable: false,
    },
    argTypes: {
        size:{
            options: ['sm', 'md', 'lg' ],
            control: {type: 'radio'}
        }
    }
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {
    args: {},
    argTypes: {}
}