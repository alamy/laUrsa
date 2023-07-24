import { Meta, StoryObj } from '@storybook/react';
import { ArrowDownCircle, ArrowDownCircleProps } from './ArrowDownCircle';

export default {
    title: 'Icon/Menu/ArrowDownCircle',
    component: ArrowDownCircle,
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
    
} as Meta<ArrowDownCircleProps>

export const Default: StoryObj<ArrowDownCircleProps> = {
    args: {},
   argTypes: {}
}