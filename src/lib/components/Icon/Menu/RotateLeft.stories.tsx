import { Meta, StoryObj } from '@storybook/react';
import { RotateLeft, RotateLeftProps } from './RotateLeft';

export default {
    title: 'Icon/Menu/RotateLeft',
    component: RotateLeft,
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
    
} as Meta<RotateLeftProps>

export const Default: StoryObj<RotateLeftProps> = {
    args: {},
   argTypes: {}
}