import type { Item } from "@/types/Items";

export const getCurrentMonth = ()=>{
  // eslint-disable-next-line prefer-const
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth()+1}`
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  const [year, month] = date.split('-').map(Number);
   return list.filter(item => 
    item.date.getFullYear() === year && item.date.getMonth() + 1 === month
  );
};

export const formatDate =(date: Date): string =>{
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  const day = date.getDate();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}
const addZeroToDate = (num: number): string => {
  return num < 10 ? `0${num}` : `${num}`;
}

export const formatCurrentMonth = (currentMonth: string): string =>{
  const [year, month] = currentMonth.split('-');
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
   return `${months[parseInt(month)-1]} ${year}`;
}