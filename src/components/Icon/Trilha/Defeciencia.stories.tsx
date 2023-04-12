import { Meta, StoryObj } from '@storybook/react';
import { Defeciencia, DefecienciaProps } from './Defeciencia';

export default {
    title: 'Icon/Trilha/Defeciencia',
    component: Defeciencia,
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
    
} as Meta<DefecienciaProps>

export const Default: StoryObj<DefecienciaProps> = {
    args: {},
   argTypes: {}
}