import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
    title: 'Atmomic/Button',
    component: Button,
    args: {
        text: 'Teste Buttom',
        type: 'primary',
        size: 'sm',
        disable: false
    }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
    args: {},
    argTypes: {}
}