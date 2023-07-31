import { Meta, StoryObj } from '@storybook/react';
import { Cobranca } from './Cobranca';
import { IconProps } from "../../../assets/InterfacePropsIcon";

export default {
    title: 'Icon/Menu/Cobranca',
    component: Cobranca,
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