import { formatCurrentMonth } from '@/helpers/dateFilter';
import * as S from './InfoAreaStyle';
import { handleNextMonth, handlePrevMonth, type InfoAreaProps } from '@/helpers/buttonsFunctions';
import { ResumeItems } from '../ResumeItems/ResumeItems';

export const InfoArea = ({ currentMonth, OnMonthChange, expense, income }: InfoAreaProps) => {
  const balance = (income ?? 0) - (expense ?? 0);
  const balanceColor = balance < 0 ? 'red' : balance === 0 ? 'black' : 'green';

  return (
    <S.Container>
      <S.MonthArea>
        <S.MonthArrow onClick={() => handlePrevMonth({ currentMonth, OnMonthChange })}>⬅️</S.MonthArrow>
        <S.MonthTitle>{formatCurrentMonth(currentMonth)}</S.MonthTitle>
        <S.MonthArrow onClick={() => handleNextMonth({ currentMonth, OnMonthChange })}>➡️</S.MonthArrow>
      </S.MonthArea>

      <S.ResumeArea>
        <ResumeItems title="Receitas" value={income ?? 0} />
        <ResumeItems title="Despesas" value={expense ?? 0} />
        <ResumeItems title="Balanço" value={balance} color={balanceColor} />
      </S.ResumeArea>
    </S.Container>
  );
};