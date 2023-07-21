import { Meta, StoryObj } from '@storybook/react';
import { Calendar, CalendarProps } from './Calendar';

export default {
    title: 'Icon/Menu/Calendar',
    component: Calendar,
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
    
} as Meta<CalendarProps>

export const Default: StoryObj<CalendarProps> = {
    args: {},
   argTypes: {}
}