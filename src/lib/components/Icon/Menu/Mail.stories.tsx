import { Meta, StoryObj } from '@storybook/react';
import { Mail, MailProps } from './Mail';

export default {
    title: 'Icon/Menu/Mail',
    component: Mail,
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
    
} as Meta<MailProps>

export const Default: StoryObj<MailProps> = {
    args: {},
   argTypes: {}
}