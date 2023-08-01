import { Meta, StoryObj } from '@storybook/react';
import { Rss, RssProps } from './Rss';

export default {
    title: 'Icon/Menu/Rss',
    component: Rss,
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
    
} as Meta<RssProps>

export const Default: StoryObj<RssProps> = {
    args: {},
   argTypes: {}
}