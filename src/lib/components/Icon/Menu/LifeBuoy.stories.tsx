import { Meta, StoryObj } from '@storybook/react';
import { LifeBuoy, LifeBuoyProps } from './LifeBuoy';

export default {
    title: 'Icon/Menu/LifeBuoy',
    component: LifeBuoy,
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
    
} as Meta<LifeBuoyProps>

export const Default: StoryObj<LifeBuoyProps> = {
    args: {},
   argTypes: {}
}