import { Meta, StoryObj } from '@storybook/react';
import { Rewind, RewindProps } from './Rewind';

export default {
    title: 'Icon/Menu/Rewind',
    component: Rewind,
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
    
} as Meta<RewindProps>

export const Default: StoryObj<RewindProps> = {
    args: {},
   argTypes: {}
}