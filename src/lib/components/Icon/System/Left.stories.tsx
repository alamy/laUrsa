import { Meta, StoryObj } from '@storybook/react';
import { Left, LeftProps } from './Left';

export default {
    title: 'Icon/System/Left',
    component: Left,
    args: {
    },
    argTypes: {
        type: {
          options: ['Primary', 'Second', 'Third' ],
          control: { type: 'radio' }
        },
        size : {
          options: ['sm' , 'md' , 'lg' , 'xl'],
          control: {type: 'radio'}
        }
      }
    
} as Meta<LeftProps>

export const Default: StoryObj<LeftProps> = {
    args: {},
   argTypes: {}
}