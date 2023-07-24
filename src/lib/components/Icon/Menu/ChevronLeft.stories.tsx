import { Meta, StoryObj } from '@storybook/react';
import { ChevronLeft, ChevronLeftProps } from './ChevronLeft';

export default {
    title: 'Icon/Menu/ChevronLeft',
    component: ChevronLeft,
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
    
} as Meta<ChevronLeftProps>

export const Default: StoryObj<ChevronLeftProps> = {
    args: {},
   argTypes: {}
}