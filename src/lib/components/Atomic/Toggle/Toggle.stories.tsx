import { Meta, StoryObj } from '@storybook/react';
import { Toggle, ToggleProps } from './Toggle';

export default {
    title: 'Atmomic/Toogle',
    component: Toggle,
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
} as Meta<ToggleProps>

export const Default: StoryObj<ToggleProps> = {
    args: {},
    argTypes: {}
}