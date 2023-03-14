import {Pagination} from "./pagination";

export interface AppResponse {
  message: string;
  status: number;
  data: any[] | null;
  pagination: Pagination

  errors?: { [key: string]: any }
}
