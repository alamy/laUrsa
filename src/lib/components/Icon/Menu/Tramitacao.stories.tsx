import { Meta, StoryObj } from '@storybook/react';
import { Tramitacao, TramitacaoProps } from './Tramitacao';

export default {
    title: 'Icon/Menu/Tramitacao',
    component: Tramitacao,
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
    
} as Meta<TramitacaoProps>

export const Default: StoryObj<TramitacaoProps> = {
    args: {},
   argTypes: {}
}