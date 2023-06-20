import { Meta, StoryObj } from '@storybook/react';
import { Cobranca, CobrancaProps } from './Cobranca';

export default {
    title: 'Icon/Menu/Cobranca',
    component: Cobranca,
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
    
} as Meta<CobrancaProps>

export const Default: StoryObj<CobrancaProps> = {
    args: {},
   argTypes: {}
}