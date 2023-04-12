import { Meta, StoryObj } from '@storybook/react';
import { Mic, MicProps } from './Mic';

export default {
    title: 'Icon/System/Mic',
    component: Mic,
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
    
} as Meta<MicProps>

export const Default: StoryObj<MicProps> = {
    args: {},
   argTypes: {}
}