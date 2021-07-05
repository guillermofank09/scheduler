export enum Periods {
  BIRTH = "BIRTH",
  MONTH_1 = "1 MONTH",
  MONTH_2 = "2 MONTHS",
  MONTH_4 = "4 MONTHS",
  MONTH_6 = "6 MONTHS",
  MONTH_12 = "12 MONTHS",
  MONTH_15 = "15 MONTHS",
  MONTH_18 = "18 MONTHS",
  MONTH_19_23 = "19-23 MONTHS",
  YEARS_2_3 = "2-3 YEARS",
  YEARS_4_6 = "4-6 YEARS",
  YEARS_7_10 = "7-10 YEARS",
}

export interface VaccineDose {
  id: number;
  doseNumber: number;
  periods: Periods[];
  appliedPeriod?: Periods;
}

export interface Company {
  id: number;
  name: string;
}

export interface Vaccine {
  id: number;
  name: string;
  company: Company;
  doses: VaccineDose[];
  color: string;
}
