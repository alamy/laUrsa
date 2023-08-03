import { Meta, StoryObj } from '@storybook/react';
import { Filter, FiltertProps } from './Filter';

export default {
    title: 'Atmomic/Filter',
    component: Filter,
    args: {
        text: 'Label',
        size: 'md',
        disable: false,
        error: false
    },
    argTypes: {
        type: {
          options: ['text', 'number', 'date'],
          control: { type: 'radio' }
        }
      }
} as Meta<FiltertProps>

export const Default: StoryObj<FiltertProps> = {
    args: {},
    argTypes: {}
}