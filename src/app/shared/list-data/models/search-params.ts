export type Params = { [x: string]: string | number };

export interface SearchParams extends Params {
  _limit: number;
  _page: number;
  _sort?: string;
  _order?: string;
}
