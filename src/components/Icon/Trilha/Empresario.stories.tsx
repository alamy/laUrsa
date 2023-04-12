import { Meta, StoryObj } from '@storybook/react';
import { Empresario, EmpresarioProps } from './Empresario';

export default {
    title: 'Icon/Trilha/Empresario',
    component: Empresario,
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
    
} as Meta<EmpresarioProps>

export const Default: StoryObj<EmpresarioProps> = {
    args: {},
   argTypes: {}
}