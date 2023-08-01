import { Meta, StoryObj } from '@storybook/react';
import { Login, LoginProps } from './Login';

export default {
    title: 'Icon/Menu/Login',
    component: Login,
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
    
} as Meta<LoginProps>

export const Default: StoryObj<LoginProps> = {
    args: {},
   argTypes: {}
}