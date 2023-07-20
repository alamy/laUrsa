import { Meta, StoryObj } from '@storybook/react';
import { Layout, LayoutProps } from './Layout';

export default {
    title: 'Icon/Menu/Layout',
    component: Layout,
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
    
} as Meta<LayoutProps>

export const Default: StoryObj<LayoutProps> = {
    args: {},
   argTypes: {}
}