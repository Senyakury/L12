interface FilmType{
    name:string,
    year:number,
    rank:number,
    awards:string[]
}
type FilmCategoriesType = {
    FilmCategory:FilmType[]
    name:string
}
interface MatchFilter<T> {
  filter: T;
}

interface RangeFilter<T> {
  filter: T;
  filterTo?: T;
}

interface ValueSearchFilter<T> {
  values: T[];
}

interface FilmFilters {
  nameFilter?: MatchFilter<string>;
  yearFilter?: RangeFilter<number>;
  rankFilter?: RangeFilter<number>;
  awardsFilter?: ValueSearchFilter<string>;
};

interface CategoryFilters  {
  nameFilter?: MatchFilter<string>;
};


function applySearchValue(filterState: FilmFilters | CategoryFilters, searchValue: string): void {
  if ('titleFilter' in filterState) {
    filterState.titleFilter = { filter: searchValue };
  } else if ('nameFilter' in filterState) {
    filterState.nameFilter = { filter: searchValue };
  }
}
function applyFiltersValue(filterState: FilmFilters, filters: Partial<FilmFilters>): void {
  Object.assign(filterState, filters);
}