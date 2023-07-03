import { Meta, StoryObj } from '@storybook/react';
import {Paginacao, PaginacaoProps} from './Paginacao'

export default {
    title: 'Molecules/Paginacao',
    component: Paginacao,
    args: {
        currentPage: 1,
        totalPages: 10,
    }

}as Meta<PaginacaoProps>

export const Default: StoryObj<PaginacaoProps> = {
    args: {
        currentPage: 1,
        totalPages: 10,
    },
    argTypes: {}
}