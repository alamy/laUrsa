import { Meta, StoryObj } from '@storybook/react';
import { Sidebar, SidebarProps } from './Sidebar';

export default {
    title: 'Icon/Menu/Sidebar',
    component: Sidebar,
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
    
} as Meta<SidebarProps>

export const Default: StoryObj<SidebarProps> = {
    args: {},
   argTypes: {}
}