import { Meta, StoryObj } from '@storybook/react';
import { DividaAtiva } from './DividaAtiva';
import { IconProps } from "../../../assets/InterfacePropsIcon";

export default {
    title: 'Icon/Menu/DividaAtiva',
    component: DividaAtiva,
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