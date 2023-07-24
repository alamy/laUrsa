import { Meta, StoryObj } from '@storybook/react';
import { List, ListProps } from './List';

export default {
    title: 'Icon/Menu/List',
    component: List,
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
    
} as Meta<ListProps>

export const Default: StoryObj<ListProps> = {
    args: {},
   argTypes: {}
}