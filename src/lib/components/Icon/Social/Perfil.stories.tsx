import { Meta, StoryObj } from '@storybook/react';
import { Perfil, PerfilProps } from './Perfil';

export default {
    title: 'Icon/Social/Perfil',
    component: Perfil,
    args: {
    },
    argTypes: {
        type: {
          options: ['Primary', 'Second'],
          control: { type: 'radio' }
        },
        size : {
          options: ['sm' , 'md' , 'lg' , 'lx'],
          control: {type: 'radio'}
        }
      }
    
} as Meta<PerfilProps>

export const Default: StoryObj<PerfilProps> = {
    args: {},
   argTypes: {}
}