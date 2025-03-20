import { useState, useMemo } from 'react';
import * as S from './InputAreaStyle';
import { Item } from '../../types/Items';
import { categories } from '../../data/categories';

type InputAreaProps = {
  onAddItem: (item: Item) => void;
};

export const InputArea = ({ onAddItem }: InputAreaProps) => {
  const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState<number | ''>(0);

  const categoryKeys = useMemo(() => Object.keys(categories), []);

  const handleAddEvent = () => {
    const errors: string[] = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push('Data inválida!');
    }
    if (!categoryKeys.includes(categoryField)) {
      errors.push('Categoria inválida!');
    }
    if (!titleField.trim()) {
      errors.push('Título vazio!');
    }
    if (!valueField || valueField <= 0) {
      errors.push('Valor inválido!');
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    onAddItem({
      date: new Date(dateField),
      category: categoryField,
      title: titleField.trim(),
      value: Number(valueField),
      paid: false
    });

    clearFields();
  };

  const clearFields = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField('');
  };

  return (
    <S.Container>
      <S.InputLabel>
        <S.InputTitle>Data</S.InputTitle>
        <S.Input type="date" value={dateField} onChange={e => setDateField(e.target.value)} required />
      </S.InputLabel>

      <S.InputLabel>
        <S.InputTitle>Categoria</S.InputTitle>
        <S.Select value={categoryField} onChange={e => setCategoryField(e.target.value)} required>
          <option value="">Selecione</option>
          {categoryKeys.map((key) => (
            <option key={key} value={key}>{categories[key].title}</option>
          ))}
        </S.Select>
      </S.InputLabel>

      <S.InputLabel>
        <S.InputTitle>Título</S.InputTitle>
        <S.Input type="text" value={titleField} onChange={e => setTitleField(e.target.value)} required />
      </S.InputLabel>

      <S.InputLabel>
        <S.InputTitle>Valor</S.InputTitle>
        <S.Input 
          type="number" 
          value={valueField} 
          onChange={e => setValueField(e.target.value === '' ? '' : parseFloat(e.target.value))}
          min="0.01"
          step="0.01"
          required
        />
      </S.InputLabel>

      <S.InputLabel>
        <S.InputTitle>&nbsp;</S.InputTitle>
        <S.Button onClick={handleAddEvent}>Adicionar</S.Button>
      </S.InputLabel>
    </S.Container>
  );
};
