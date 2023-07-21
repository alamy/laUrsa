import { Meta, StoryObj } from '@storybook/react';
import { BookOpen, BookOpenProps } from './BookOpen';

export default {
    title: 'Icon/Menu/BookOpen',
    component: BookOpen,
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
    
} as Meta<BookOpenProps>

export const Default: StoryObj<BookOpenProps> = {
    args: {},
   argTypes: {}
}