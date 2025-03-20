import type { Category } from "@/types/Categories";

export const categories: Record<string, Category> = {
  food: { title: 'alimentação', color: 'blue', expense: true },
  rent: { title: 'aluguel', color: 'red', expense: true },
  salary: { title: 'salário', color: 'green', expense: false },
};
