import { Meta, StoryObj } from '@storybook/react';
import { ArrowDownCircle } from './ArrowDownCircle';
import { IconProps } from "../../../assets/InterfacePropsIcon";

export default {
    title: 'Icon/Menu/ArrowDownCircle',
    component: ArrowDownCircle,
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
    
} as Meta<IconProps>

export const Default: StoryObj<IconProps> = {
    args: {},
   argTypes: {}
}