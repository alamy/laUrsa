import { Meta, StoryObj } from '@storybook/react';
import { Pin, PinProps } from './Pin';

export default {
    title: 'Icon/Menu/Pin',
    component: Pin,
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
    
} as Meta<PinProps>

export const Default: StoryObj<PinProps> = {
    args: {},
   argTypes: {}
}