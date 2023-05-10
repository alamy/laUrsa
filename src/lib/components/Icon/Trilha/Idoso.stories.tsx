import { Meta, StoryObj } from '@storybook/react';
import { Idoso, IdosoProps } from './Idoso';

export default {
    title: 'Icon/Trilha/Idoso',
    component: Idoso,
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
    
} as Meta<IdosoProps>

export const Default: StoryObj<IdosoProps> = {
    args: {},
   argTypes: {}
}