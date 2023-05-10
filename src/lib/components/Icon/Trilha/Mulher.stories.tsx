import { Meta, StoryObj } from '@storybook/react';
import { Mulher, MulherProps } from './Mulher';

export default {
    title: 'Icon/Trilha/Mulher',
    component: Mulher,
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
    
} as Meta<MulherProps>

export const Default: StoryObj<MulherProps> = {
    args: {},
   argTypes: {}
}