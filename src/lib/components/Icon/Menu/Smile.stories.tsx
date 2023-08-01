import { Meta, StoryObj } from '@storybook/react';
import { Smile, SmileProps } from './Smile';

export default {
    title: 'Icon/Menu/Smile',
    component: Smile,
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
    
} as Meta<SmileProps>

export const Default: StoryObj<SmileProps> = {
    args: {},
   argTypes: {}
}