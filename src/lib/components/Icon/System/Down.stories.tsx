import { Meta, StoryObj } from '@storybook/react';
import { Down, DownProps } from './Down';

export default {
    title: 'Icon/System/Down',
    component: Down,
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
    
} as Meta<DownProps>

export const Default: StoryObj<DownProps> = {
    args: {},
   argTypes: {}
}