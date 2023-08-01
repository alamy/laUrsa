import { Meta, StoryObj } from '@storybook/react';
import { Share2, Share2Props } from './Share2';

export default {
    title: 'Icon/Menu/Share2',
    component: Share2,
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
    
} as Meta<Share2Props>

export const Default: StoryObj<Share2Props> = {
    args: {},
   argTypes: {}
}