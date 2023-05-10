import { Meta, StoryObj } from '@storybook/react';
import { Aprender, AprenderProps } from './Aprender';

export default {
    title: 'Icon/Trilha/Aprender',
    component: Aprender,
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
    
} as Meta<AprenderProps>

export const Default: StoryObj<AprenderProps> = {
    args: {},
   argTypes: {}
}