import { cliente } from "./cliente"

export type Anuncio = {
  id: number;
  nome:string;
  dataInicio: string;
  dataTermino: string;
  investimentoDia: number;
  cliente: cliente;
}

export type AnuncioPage = {
  content?: Anuncio[];
  last: boolean;
  totalElements: number;
  totalPages: number;
  size?: number;
  number: number;
  first: boolean;
  numberOfElements?: number;
  empty?: boolean;
}