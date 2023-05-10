import { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from './Input';

export default {
    title: 'Atmomic/Input',
    component: Input,
    args: {
        text: 'Label',
        size: 'md',
        disable: false,
        error: false
    },
    argTypes: {
        type: {
          options: ['text', 'number'],
          control: { type: 'radio' }
        }
      }
} as Meta<InputProps>

export const Default: StoryObj<InputProps> = {
    args: {},
    argTypes: {}
}