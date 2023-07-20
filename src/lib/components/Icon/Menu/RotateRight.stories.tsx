import { Meta, StoryObj } from '@storybook/react';
import { RotateRight, RotateRightProps } from './RotateRight';

export default {
    title: 'Icon/Menu/RotateRight',
    component: RotateRight,
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
    
} as Meta<RotateRightProps>

export const Default: StoryObj<RotateRightProps> = {
    args: {},
   argTypes: {}
}