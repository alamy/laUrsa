import { Meta, StoryObj } from '@storybook/react';
import { SkipForward, SkipForwardProps } from './SkipForward';

export default {
    title: 'Icon/Menu/SkipForward',
    component: SkipForward,
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
    
} as Meta<SkipForwardProps>

export const Default: StoryObj<SkipForwardProps> = {
    args: {},
   argTypes: {}
}