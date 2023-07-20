import { Meta, StoryObj } from '@storybook/react';
import { Instagram, InstagramProps } from './Instagram';

export default {
    title: 'Icon/Menu/Instagram',
    component: Instagram,
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
    
} as Meta<InstagramProps>

export const Default: StoryObj<InstagramProps> = {
    args: {},
   argTypes: {}
}