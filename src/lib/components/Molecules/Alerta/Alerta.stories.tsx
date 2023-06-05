import { Meta, StoryObj } from '@storybook/react';
import {Alerta, AlertaProps} from './Alerta'

export default {
    title: 'Molecules/Alerta',
    component: Alerta,
    args: {
        texto: '',
        titulo: ''
    },
    argTypes: {
        tipo: {
          options: ['danger', 'notification', 'sucess'],
          control: { type: 'radio' }
        }
      }

}as Meta<AlertaProps>

export const Default: StoryObj<AlertaProps> = {
    args: {
        texto: 'Notification message. Lorem ipsum doloro sit amet, consectur adipicing.',
        tipo: 'notification',
        titulo: 'Info notification'
    },
    argTypes: {}
}