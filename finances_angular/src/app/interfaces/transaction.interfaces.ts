export interface ITransaction{
  id: string,
  value: number,
  description: string | null,
  type: "entrada" | "saida",
}

export type TTransaction = Omit<ITransaction, "id">
