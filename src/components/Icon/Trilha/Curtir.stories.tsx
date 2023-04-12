import { Meta, StoryObj } from '@storybook/react';
import { Curtir, CurtirProps } from './Curtir';

export default {
    title: 'Icon/Trilha/Curtir',
    component: Curtir,
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
    
} as Meta<CurtirProps>

export const Default: StoryObj<CurtirProps> = {
    args: {},
   argTypes: {}
}