import { Meta, StoryObj } from '@storybook/react';
import { Textarea, TextareaProps } from './Textarea';

export default {
    title: 'Atmomic/Textarea',
    component: Textarea,
    args: {
        text: 'Label',
        disable: false,
        error: false
    },
    argTypes: {
        type: {
          options: ['text', 'number'],
          control: { type: 'radio' }
        },
        size: {
          options: ['md', 'lg'],
          control: {type: 'radio'}
        }
      }
} as Meta<TextareaProps>

export const Default: StoryObj<TextareaProps> = {
    args: {},
    argTypes: {}
}