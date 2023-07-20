import { Meta, StoryObj } from '@storybook/react';
import { Home, HomeProps } from './Home';

export default {
    title: 'Icon/Menu/Home',
    component: Home,
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
    
} as Meta<HomeProps>

export const Default: StoryObj<HomeProps> = {
    args: {},
   argTypes: {}
}