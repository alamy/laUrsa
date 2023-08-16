import { Meta, StoryObj } from '@storybook/react';
import { Range, RangeProps } from './Range';

export default {
    title: 'Atmomic/Range',
    component: Range,
    args: {
        text: 'Label',
        disable: false,
        size: 'md',
        name: 'name'
    },
    argTypes: {
        size:{
            options: ['sm', 'md', 'lg' ],
            control: {type: 'radio'}
        }
    }
} as Meta<RangeProps>

export const Default: StoryObj<RangeProps> = {
    args: {},
    argTypes: {}
}