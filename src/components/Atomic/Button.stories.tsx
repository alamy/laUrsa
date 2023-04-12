import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
    title: 'Atmomic/Button',
    component: Button,
    args: {
        text: 'Button',
        type: 'primary',
        size: 'md',
        disable: false
    }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
    args: {},
    argTypes: {}
}