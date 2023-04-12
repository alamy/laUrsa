import { Meta, StoryObj } from '@storybook/react';
import { Servidor, ServidorProps } from './Servidor';

export default {
    title: 'Icon/Trilha/Servidor',
    component: Servidor,
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
    
} as Meta<ServidorProps>

export const Default: StoryObj<ServidorProps> = {
    args: {},
   argTypes: {}
}