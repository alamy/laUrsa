import { Meta, StoryObj } from '@storybook/react';
import { Send, SendProps } from './Send';

export default {
    title: 'Icon/Menu/Send',
    component: Send,
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
    
} as Meta<SendProps>

export const Default: StoryObj<SendProps> = {
    args: {},
   argTypes: {}
}