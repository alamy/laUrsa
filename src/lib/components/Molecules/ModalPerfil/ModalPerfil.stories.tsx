import { Meta, StoryObj } from '@storybook/react';
import {ModalPerfil, ModalPerfilProps} from './ModalPerfil'

export default {
    title: 'Molecules/ModalPerfil',
    component: ModalPerfil,
    args: {
        usuario: '',
        descricaoUsuario: 'String',
        localidadeUsuario: 'String'
    },
    argTypes: {
      }

}as Meta<ModalPerfilProps>

export const Default: StoryObj<ModalPerfilProps> = {
    args: {
    },
    argTypes: {}
}