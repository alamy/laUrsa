import { Meta, StoryObj } from '@storybook/react';
import { Logo, LogoProps } from './Logo';

export default {
    title: 'Icon/Logo',
    component: Logo,
    args: {
    },
    argTypes: {
        size : {
          options: ['sm' , 'md' , 'lg' , 'xl'],
        }
      }
    
} as Meta<LogoProps>

export const Default: StoryObj<LogoProps> = {
    args: {},
   argTypes: {}
}