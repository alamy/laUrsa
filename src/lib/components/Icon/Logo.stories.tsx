import { Meta, StoryObj } from '@storybook/react';
import { Logo, LogoProps } from './Logo';

export default {
    title: 'Icon/Logo',
    component: Logo,
    args: {
    },
    argTypes: {
      type: {
        options: ['Primary', 'Second'],
        control: { type: 'radio' }
      },
        size : {
          options: ['sm' , 'md' , 'lg' , 'xl'],
        }
      }
    
} as Meta<LogoProps>

export const Default: StoryObj<LogoProps> = {
    args: {},
   argTypes: {
    type: {
      options: ['Primary', 'Second'],
      control: { type: 'radio' }
    },
      size : {
        options: ['sm' , 'md' , 'lg' , 'xl'],
      }
   }
}