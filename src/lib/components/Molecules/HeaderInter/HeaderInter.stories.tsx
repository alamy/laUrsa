import { Meta, StoryObj } from '@storybook/react';
import {HeaderInter, HeaderInterProps} from './HeaderInter'

export default {
    title: 'Molecules/HeaderInter',
    component: HeaderInter,
    args: {
        texto: '',
        titulo: ''
    },
    argTypes: {
      }

}as Meta<HeaderInterProps>

export const Default: StoryObj<HeaderInterProps> = {
    args: {
        texto: 'Notification message. Lorem ipsum doloro sit amet, consectur adipicing.',
        titulo: 'Info notification'
    },
    argTypes: {}
}