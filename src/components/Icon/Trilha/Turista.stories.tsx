import { Meta, StoryObj } from '@storybook/react';
import { Turista, TuristaProps } from './Turista';

export default {
    title: 'Icon/Trilha/Turista',
    component: Turista,
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
    
} as Meta<TuristaProps>

export const Default: StoryObj<TuristaProps> = {
    args: {},
   argTypes: {}
}