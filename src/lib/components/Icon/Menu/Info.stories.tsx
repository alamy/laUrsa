import { Meta, StoryObj } from '@storybook/react';
import { Info, InfoProps } from './Info';

export default {
    title: 'Icon/Menu/Info',
    component: Info,
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
    
} as Meta<InfoProps>

export const Default: StoryObj<InfoProps> = {
    args: {},
   argTypes: {}
}