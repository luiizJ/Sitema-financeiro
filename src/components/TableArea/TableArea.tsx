import React from 'react';
import * as S from './TableAreaStyle';
import type { Item } from '@/types/Items';
import { TableItem } from '../TableItem/TableItem';

type TableAreaProps = {
  list: Item[];
  setList: React.Dispatch<React.SetStateAction<Item[]>>;
};

export const TableAreas = ({ list, setList }: TableAreaProps) => {
  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeaderColumn width={150}>Data</S.TableHeaderColumn>
          <S.TableHeaderColumn width={120}>Categoria</S.TableHeaderColumn>
          <S.TableHeaderColumn width={150}>Título</S.TableHeaderColumn>
          <S.TableHeaderColumn>Valor</S.TableHeaderColumn>
          <S.TableHeaderColumn width={100}>Pago</S.TableHeaderColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index || item.title} item={item} setList={setList}/>  
        ))}
      </tbody>
    </S.Table>
  );
};
