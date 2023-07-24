import { Meta, StoryObj } from '@storybook/react';
import { ChevronDown, ChevronDownProps } from './ChevronDown';

export default {
    title: 'Icon/Menu/ChevronDown',
    component: ChevronDown,
    args: {
    },
    argTypes: {
        type: {
          options: ['Primary', 'Second'],
          control: { type: 'radio' }
        },
        size : {
          options: ['sm' , 'md' , 'lg' , 'xl'],
          control: {type: 'radio'}
        }
      }
    
} as Meta<ChevronDownProps>

export const Default: StoryObj<ChevronDownProps> = {
    args: {},
   argTypes: {}
}