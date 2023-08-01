import { Meta, StoryObj } from '@storybook/react';
import { SkipBack, SkipBackProps } from './SkipBack';

export default {
    title: 'Icon/Menu/SkipBack',
    component: SkipBack,
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
    
} as Meta<SkipBackProps>

export const Default: StoryObj<SkipBackProps> = {
    args: {},
   argTypes: {}
}