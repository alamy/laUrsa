import { Meta, StoryObj } from '@storybook/react';
import { Contestacao, ContestacaoProps } from './Contestacao';

export default {
    title: 'Icon/Menu/Contestacao',
    component: Contestacao,
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
    
} as Meta<ContestacaoProps>

export const Default: StoryObj<ContestacaoProps> = {
    args: {},
   argTypes: {}
}