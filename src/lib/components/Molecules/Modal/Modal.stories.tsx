import { Meta, StoryObj } from '@storybook/react';
import {Modal, ModalProps} from './Modal'

export default {
    title: 'Molecules/Modal',
    component: Modal,
    args: {
        texto: '',
        titulo: ''
    },
    argTypes: {
      }

}as Meta<ModalProps>

export const Default: StoryObj<ModalProps> = {
    args: {
        texto: 'Notification message. Lorem ipsum doloro sit amet, consectur adipicing.',
        titulo: 'Info notification'
    },
    argTypes: {}
}