import { Meta, StoryObj } from '@storybook/react';
import { Eye, EyeProps } from './Eye';

export default {
    title: 'Icon/System/Eye',
    component: Eye,
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
    
} as Meta<EyeProps>

export const Default: StoryObj<EyeProps> = {
    args: {},
   argTypes: {}
}