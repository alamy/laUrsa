import { Meta, StoryObj } from '@storybook/react';
import { Italic, ItalicProps } from './Italic';

export default {
    title: 'Icon/Menu/Italic',
    component: Italic,
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
    
} as Meta<ItalicProps>

export const Default: StoryObj<ItalicProps> = {
    args: {},
   argTypes: {}
}