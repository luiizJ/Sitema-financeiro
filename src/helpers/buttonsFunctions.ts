export type InfoAreaProps = {
  currentMonth: string;
  OnMonthChange: (newMonth: string)=>void;
  income?: number;
  expense?: number;
}

export const handlePrevMonth = ({OnMonthChange, currentMonth}:InfoAreaProps) => {
  const [year, month] = currentMonth.split('-');
  const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
  currentDate.setMonth(currentDate.getMonth() - 1);
  const newMonth = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;
  console.log("Mudando para o mês anterior:", newMonth);
  OnMonthChange(newMonth);
};

export const handleNextMonth = ({OnMonthChange, currentMonth}:InfoAreaProps) => {
  const [year, month] = currentMonth.split('-');
  const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
  currentDate.setMonth(currentDate.getMonth() + 1);
  const newMonth = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;
  console.log("Mudando para o próximo mês:", newMonth);
  OnMonthChange(newMonth);
};