import { Meta, StoryObj } from '@storybook/react';
import { ArrowUp, ArrowUpProps } from './ArrowUp';

export default {
    title: 'Icon/Menu/ArrowUp',
    component: ArrowUp,
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
    
} as Meta<ArrowUpProps>

export const Default: StoryObj<ArrowUpProps> = {
    args: {},
   argTypes: {}
}