import { Meta, StoryObj } from '@storybook/react';
import { EyeNot, EyeNotProps } from './EyeNot';

export default {
    title: 'Icon/System/EyeNot',
    component: EyeNot,
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
    
} as Meta<EyeNotProps>

export const Default: StoryObj<EyeNotProps> = {
    args: {},
   argTypes: {}
}