import * as S from './ResumeItemsStyle'

type ResumeItemsProps = {
  title: string;
  value: number;
  color?: string
}

export const ResumeItems =({title, value, color }:ResumeItemsProps) =>{
  return(
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Info color={ color }>{`R$ ${value}`}</S.Info>
    </S.Container>
  )
}