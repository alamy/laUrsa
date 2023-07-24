import { Meta, StoryObj } from '@storybook/react';
import { Logout, LogoutProps } from './Logout';

export default {
    title: 'Icon/Menu/Logout',
    component: Logout,
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
    
} as Meta<LogoutProps>

export const Default: StoryObj<LogoutProps> = {
    args: {},
   argTypes: {}
}