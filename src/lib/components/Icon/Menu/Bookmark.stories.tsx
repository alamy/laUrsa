import { Meta, StoryObj } from '@storybook/react';
import { Bookmark, BookmarkProps } from './Bookmark';

export default {
    title: 'Icon/Menu/Bookmark',
    component: Bookmark,
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
    
} as Meta<BookmarkProps>

export const Default: StoryObj<BookmarkProps> = {
    args: {},
   argTypes: {}
}