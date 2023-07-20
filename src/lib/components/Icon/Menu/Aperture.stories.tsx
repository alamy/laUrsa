import { Meta, StoryObj } from '@storybook/react';
import { Aperture, ApertureProps } from './Aperture';

export default {
    title: 'Icon/Menu/Aperture',
    component: Aperture,
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
    
} as Meta<ApertureProps>

export const Default: StoryObj<ApertureProps> = {
    args: {},
   argTypes: {}
}