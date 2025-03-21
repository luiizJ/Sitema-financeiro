import type { Category } from "@/types/Categories";

export const categories: Record<string, Category> = {
  food: { title: 'Food', color: 'blue', expense: true },
  rent: { title: 'Rent', color: 'red', expense: true },
  salary: { title: 'Salary', color: 'green', expense: false },
};
