import React from 'react';
import { Bar } from 'react-chartjs-2';
import * as S from './ChartComponentStyle';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const ChartComponent = ({ income, expense }: { income: number; expense: number }) => {
  const data = {
    labels: ['Receitas', 'Despesas'],
    datasets: [
      {
        label: 'Resumo Financeiro',
        data: [income, expense],
        backgroundColor: ['#4CAF50', '#F44336'],
      },
    ],
  };

  return (
    <S.Container>
      <S.Chart>
        <h2>Resumo Financeiro</h2>
        <Bar data={data} />
      </S.Chart>
      <S.Indicators>
        <S.Indicator>
          <S.ColorBox color="#4CAF50" />
          <span>Receitas</span>
        </S.Indicator>
        <S.Indicator>
          <S.ColorBox color="#F44336" />
          <span>Despesas</span>
        </S.Indicator>
      </S.Indicators>
    </S.Container>
  );
}