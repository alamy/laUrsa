import { Meta, StoryObj } from '@storybook/react';
import { Book, BookProps } from './Book';

export default {
    title: 'Icon/Menu/Book',
    component: Book,
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
    
} as Meta<BookProps>

export const Default: StoryObj<BookProps> = {
    args: {},
   argTypes: {}
}