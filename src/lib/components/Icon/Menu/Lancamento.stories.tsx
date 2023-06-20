import { Meta, StoryObj } from '@storybook/react';
import { Lancamento, LancamentoProps } from './Lancamento';

export default {
    title: 'Icon/Menu/Lancamento',
    component: Lancamento,
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
    
} as Meta<LancamentoProps>

export const Default: StoryObj<LancamentoProps> = {
    args: {},
   argTypes: {}
}