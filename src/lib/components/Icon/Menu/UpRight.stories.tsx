import { Meta, StoryObj } from '@storybook/react';
import { UpRight, UpRightProps } from './UpRight';

export default {
    title: 'Icon/Menu/UpRight',
    component: UpRight,
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
    
} as Meta<UpRightProps>

export const Default: StoryObj<UpRightProps> = {
    args: {},
   argTypes: {}
}