import { Meta, StoryObj } from '@storybook/react';
import { Search, SearchProps } from './Search';

export default {
    title: 'Icon/System/Search',
    component: Search,
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
    
} as Meta<SearchProps>

export const Default: StoryObj<SearchProps> = {
    args: {},
   argTypes: {}
}