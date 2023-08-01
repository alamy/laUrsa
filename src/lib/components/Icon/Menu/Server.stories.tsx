import { Meta, StoryObj } from '@storybook/react';
import { Server, ServerProps } from './Server';

export default {
    title: 'Icon/Menu/Server',
    component: Server,
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
    
} as Meta<ServerProps>

export const Default: StoryObj<ServerProps> = {
    args: {},
   argTypes: {}
}