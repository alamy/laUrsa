import { Meta, StoryObj } from '@storybook/react';
import { Scissor, ScissorProps } from './Scissor';

export default {
    title: 'Icon/Menu/Scissor',
    component: Scissor,
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
    
} as Meta<ScissorProps>

export const Default: StoryObj<ScissorProps> = {
    args: {},
   argTypes: {}
}