import { Meta, StoryObj } from '@storybook/react';
import { Square, SquareProps } from './Square';

export default {
    title: 'Icon/Menu/Square',
    component: Square,
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
    
} as Meta<SquareProps>

export const Default: StoryObj<SquareProps> = {
    args: {},
   argTypes: {}
}