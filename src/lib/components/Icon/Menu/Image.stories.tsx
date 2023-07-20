import { Meta, StoryObj } from '@storybook/react';
import { Image, ImageProps } from './Image';

export default {
    title: 'Icon/Menu/Image',
    component: Image,
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
    
} as Meta<ImageProps>

export const Default: StoryObj<ImageProps> = {
    args: {},
   argTypes: {}
}