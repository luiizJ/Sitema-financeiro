'use client'
import {useEffect, useState} from 'react'
import * as S from './page.styles'
import {Item} from '../types/Items'
import {categories} from '../data/categories'
import {items} from '../data/items'
import { filterListByMonth, getCurrentMonth } from '@/helpers/dateFilter'
import { TableAreas } from '@/components/TableArea/TableArea'
import { InfoArea } from '@/components/InfoArea/InfoArea'
import { InputArea } from '@/components/InputArea/InputArea'
import { ChartComponent } from '@/components/ChartComponent/ChartComponent'

const Page = ()=>{
  const [list, setList]=useState<Item[]>(items)
  const [filterList, setFilterList]=useState<Item[]>([])
  const [currentMonth, setCurrentMonth]=useState<string>(getCurrentMonth())
  const [income, setIncome]=useState<number>(0);
  const [expense, setExpense]=useState<number>(0);

  const handleMontChange = (newMonth: string) => {
    console.log("Novo mês recebido:", newMonth);
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    const newList = [...list];
    newList.push(item);
    setList(newList);
  };

  useEffect(()=>{
    setFilterList( filterListByMonth(list, currentMonth));
  },[list, currentMonth])

  useEffect(()=>{
    let incomeCount=0;
    let expenseCount=0;

    filterList.forEach((item)=>{
      if(categories[item.category].expense){
        expenseCount += item.value ?? 0;
      }else{
        incomeCount+=item.value ?? 0;
      }
    })
    setIncome(incomeCount);
    setExpense(expenseCount);
  },[filterList])
  
    return (
        <S.Container>
          <S.Header>
            <S.HeaderText>Finance System</S.HeaderText>
          </S.Header>
            <S.Body>
              <InfoArea 
              OnMonthChange={handleMontChange}
              currentMonth ={currentMonth}
              income={income}
              expense={expense}
              />
              <ChartComponent income ={income} expense ={expense}/>
              <InputArea 
              onAddItem={handleAddItem}/>
              <TableAreas 
                list={filterList}
                setList={setList}
              />
            </S.Body>
        </S.Container>
    )
}

export default Page;