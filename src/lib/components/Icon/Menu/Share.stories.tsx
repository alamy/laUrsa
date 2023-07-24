import { Meta, StoryObj } from '@storybook/react';
import { Share, ShareProps } from './Share';

export default {
    title: 'Icon/Menu/Share',
    component: Share,
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
    
} as Meta<ShareProps>

export const Default: StoryObj<ShareProps> = {
    args: {},
   argTypes: {}
}