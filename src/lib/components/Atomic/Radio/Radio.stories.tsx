import { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioProps } from './Radio';

export default {
    title: 'Atmomic/Radio',
    component: Radio,
    args: {
        text: 'Label',
        disable: false,
        size: 'md'
    },
    argTypes: {
        size:{
            options: ['sm', 'md', 'lg' ],
            control: {type: 'radio'}
        }
    }
} as Meta<RadioProps>

export const Default: StoryObj<RadioProps> = {
    args: {},
    argTypes: {}
}