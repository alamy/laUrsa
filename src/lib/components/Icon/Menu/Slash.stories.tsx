import { Meta, StoryObj } from '@storybook/react';
import { Slash, SlashProps } from './Slash';

export default {
    title: 'Icon/Menu/Slash',
    component: Slash,
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
    
} as Meta<SlashProps>

export const Default: StoryObj<SlashProps> = {
    args: {},
   argTypes: {}
}