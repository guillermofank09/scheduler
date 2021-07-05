import { Periods } from "types/Vaccine";
import Patient from "types/Patient";

export const Patients: Patient[] = [
  {
    id: 1,
    firstName: "Robert",
    lastName: "Gray",
    dateOfBirth: "04-24-2020", // easier to manage Dates with strings
    vaccines: [
      {
        id: 1,
        name: "HepB",
        company: {
          id: 1,
          name: "Engerix-B",
        },
        doses: [
          {
            id: 41,
            doseNumber: 1,
            periods: [Periods.BIRTH],
            appliedPeriod: Periods.BIRTH,
          },
          {
            id: 42,
            doseNumber: 2,
            periods: [Periods.MONTH_1],
            appliedPeriod: Periods.MONTH_1,
          },
          {
            id: 43,
            doseNumber: 3,
            periods: [
              Periods.MONTH_6,
              Periods.MONTH_12,
              Periods.MONTH_15,
              Periods.MONTH_18,
            ],
            appliedPeriod: Periods.MONTH_12,
          },
        ],
        color: "005AAB",
      },
      {
        id: 2,
        name: "Rotavirus",
        company: {
          id: 2,
          name: "Merck",
        },
        doses: [
          {
            id: 44,
            doseNumber: 1,
            periods: [Periods.MONTH_2],
            appliedPeriod: Periods.MONTH_2,
          },
          {
            id: 45,
            doseNumber: 2,
            periods: [Periods.MONTH_4],
            appliedPeriod: Periods.MONTH_4,
          },
          {
            id: 46,
            doseNumber: 3,
            periods: [Periods.MONTH_6],
          },
        ],
        color: "F8DEA1",
      },
      {
        id: 3,
        name: "DTaP",
        company: {
          id: 3,
          name: "Daptacel",
        },
        doses: [
          {
            id: 47,
            doseNumber: 1,
            periods: [Periods.MONTH_2],
            appliedPeriod: Periods.MONTH_2,
          },
          {
            id: 48,
            doseNumber: 2,
            periods: [Periods.MONTH_4],
            appliedPeriod: Periods.MONTH_4,
          },
          {
            id: 49,
            doseNumber: 3,
            periods: [Periods.MONTH_6],
            appliedPeriod: Periods.MONTH_6,
          },
          {
            id: 50,
            doseNumber: 4,
            periods: [Periods.MONTH_15, Periods.MONTH_18],
          },
          {
            id: 51,
            doseNumber: 5,
            periods: [Periods.YEARS_4_6],
          },
        ],
        color: "D0F9C7",
      },
      {
        id: 4,
        name: "Hib",
        company: {
          id: 4,
          name: "Hiberix",
        },
        doses: [
          {
            id: 56,
            doseNumber: 1,
            periods: [Periods.MONTH_2],
            appliedPeriod: Periods.MONTH_2,
          },
          {
            id: 57,
            doseNumber: 2,
            periods: [Periods.MONTH_4],
            appliedPeriod: Periods.MONTH_4,
          },
          {
            id: 58,
            doseNumber: 3,
            periods: [Periods.MONTH_6],
            appliedPeriod: Periods.MONTH_6,
          },
          {
            id: 59,
            doseNumber: 4,
            periods: [Periods.MONTH_12],
            appliedPeriod: Periods.MONTH_12,
          },
        ],
        color: "F5D0FA",
      },
      {
        id: 5,
        name: "Pneumococcal",
        company: {
          id: 5,
          name: "Pfizer",
        },
        doses: [
          {
            id: 60,
            doseNumber: 1,
            periods: [Periods.MONTH_2],
            appliedPeriod: Periods.MONTH_2,
          },
          {
            id: 61,
            doseNumber: 2,
            periods: [Periods.MONTH_4],
            appliedPeriod: Periods.MONTH_4,
          },
          {
            id: 62,
            doseNumber: 3,
            periods: [Periods.MONTH_6],
            appliedPeriod: Periods.MONTH_12,
          },
          {
            id: 63,
            doseNumber: 4,
            periods: [Periods.MONTH_12],
          },
        ],
        color: "FAF9D0",
      },
      {
        id: 6,
        name: "Polio",
        company: {
          id: 6,
          name: "GlaxoSmithKline",
        },
        doses: [
          {
            id: 64,
            doseNumber: 1,
            periods: [Periods.MONTH_2],
            appliedPeriod: Periods.MONTH_2,
          },
          {
            id: 65,
            doseNumber: 2,
            periods: [Periods.MONTH_4],
            appliedPeriod: Periods.MONTH_4,
          },
          {
            id: 66,
            doseNumber: 3,
            periods: [
              Periods.MONTH_6,
              Periods.MONTH_12,
              Periods.MONTH_15,
              Periods.MONTH_18,
            ],
            appliedPeriod: Periods.MONTH_6,
          },
          {
            id: 67,
            doseNumber: 4,
            periods: [Periods.YEARS_4_6],
          },
        ],
        color: "D0FAE6",
      },
    ],
  },
];
