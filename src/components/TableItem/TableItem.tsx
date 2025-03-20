'use client'
import type { Item } from '@/types/Items';
import * as S from './TableItemStyle'
import { formatDate } from '@/helpers/dateFilter';
import { categories } from '@/data/categories';

type TableItemProps = {
  item: Item;
  setList: React.Dispatch<React.SetStateAction<Item[]>>;
};

export const TableItem = ({ item, setList }: TableItemProps) => {
  const categoryKey = item.category.toLowerCase();
  const categoryData = categories[categoryKey];
  const togglePaid = (selectedItem: Item) => {
    setList(prev =>
      prev.map(item =>
        item === selectedItem ? { ...item, paid: !item.paid } : item
      )
    );
  };  

  return (
    <S.TableLine>
      <S.TableData>{formatDate(item.date)}</S.TableData>
      <S.TableData>
        {categoryData ? (
          <S.Category color={categoryData.color}>{categoryData.title}</S.Category>
        ) : (
          <S.Category color="#ff4d4d">Categoria Inválida</S.Category>
        )}
      </S.TableData>
      <S.TableData>{item.title}
      </S.TableData>
      <S.TableData>
        <S.Value color={categoryData?.expense ? '#ff4d4d' : '#4caf50'}>
          R$ {item.value.toFixed(2)}
        </S.Value>
      </S.TableData>
      <S.TableData>
      <input type="checkbox" checked={!!item.paid} onChange={() => togglePaid(item)} />
      </S.TableData>
    </S.TableLine>
  );
};