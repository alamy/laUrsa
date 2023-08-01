import { Meta, StoryObj } from '@storybook/react';
import { Repeat, RepeatProps } from './Repeat';

export default {
    title: 'Icon/Menu/Repeat',
    component: Repeat,
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
    
} as Meta<RepeatProps>

export const Default: StoryObj<RepeatProps> = {
    args: {},
   argTypes: {}
}