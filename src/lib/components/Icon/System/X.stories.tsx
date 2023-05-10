import { Meta, StoryObj } from '@storybook/react';
import { X, XProps } from './X';

export default {
    title: 'Icon/System/X',
    component: X,
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
    
} as Meta<XProps>

export const Default: StoryObj<XProps> = {
    args: {},
   argTypes: {}
}