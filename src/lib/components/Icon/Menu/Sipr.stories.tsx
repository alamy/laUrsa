import { Meta, StoryObj } from '@storybook/react';
import { Sirp, SirpProps } from './Sipr';

export default {
    title: 'Icon/Menu/Sirp',
    component: Sirp,
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
    
} as Meta<SirpProps>

export const Default: StoryObj<SirpProps> = {
    args: {},
   argTypes: {}
}