import { Meta, StoryObj } from '@storybook/react';
import { Bluetooth, BluetoothProps } from './Bluetooth';

export default {
    title: 'Icon/Menu/Bluetooth',
    component: Bluetooth,
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
    
} as Meta<BluetoothProps>

export const Default: StoryObj<BluetoothProps> = {
    args: {},
   argTypes: {}
}