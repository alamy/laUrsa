import { Meta, StoryObj } from '@storybook/react';
import { Table, TableProps } from './Table';

export default {
  title: 'Molecules/Table',
  component: Table,
  args: {
    typeTable: 'Default',
    value: '',
    header:['id', 'descricao'],
    Obj: {1:["1", "Mercantil", 'Descricao']},
   
    id: []
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta<TableProps>

export const Default: StoryObj<TableProps> = {
  args: {
    typeTable: 'Default',
    value: '',
    header:['id', 'descricao', 'Exemplo', 'Ação'],
    Obj: {1:["1", "Mercantil", 'Descricao']},
  },
}

export const HeaderDark: StoryObj<TableProps> = {
  args: {
    typeTable: 'HeaderDark',
    value: '',
    header:['id', 'descricao', 'Exemplo', 'Ação'],
    Obj: {1:["1", "Mercantil", 'Descricao']},
  },
  argTypes: {}
}

export const Dark: StoryObj<TableProps> = { 
  args: {
    typeTable: 'Dark',
    value: '',
    header:['id', 'descricao', 'Exemplo', 'Ação'],
    Obj: {1:["1", "Mercantil", 'Descricao'],2:["1", "Mercantil", 'Descricao']},
  },
  argTypes: {}
}
