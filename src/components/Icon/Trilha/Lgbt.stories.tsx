import { Meta, StoryObj } from '@storybook/react';
import { Lgbt, LgbtProps } from './Lgbt';

export default {
    title: 'Icon/Trilha/Lgbt',
    component: Lgbt,
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
    
} as Meta<LgbtProps>

export const Default: StoryObj<LgbtProps> = {
    args: {},
   argTypes: {}
}