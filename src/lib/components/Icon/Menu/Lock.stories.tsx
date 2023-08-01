import { Meta, StoryObj } from '@storybook/react';
import { Lock, LockProps } from './Lock';

export default {
    title: 'Icon/Menu/Lock',
    component: Lock,
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
    
} as Meta<LockProps>

export const Default: StoryObj<LockProps> = {
    args: {},
   argTypes: {}
}