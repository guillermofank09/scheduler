import { Periods, Vaccine } from "types/Vaccine";

export const Vaccines: Vaccine[] = [
  {
    id: 1,
    name: "HepB",
    company: {
      id: 1,
      name: "Engerix-B",
    },
    doses: [
      {
        id: 1,
        doseNumber: 1,
        periods: [Periods.BIRTH],
      },
      {
        id: 2,
        doseNumber: 2,
        periods: [Periods.MONTH_1],
      },
      {
        id: 3,
        doseNumber: 3,
        periods: [
          Periods.MONTH_6,
          Periods.MONTH_12,
          Periods.MONTH_15,
          Periods.MONTH_18,
        ],
      },
    ],
    color: "A1CFF8",
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
        id: 4,
        doseNumber: 1,
        periods: [Periods.MONTH_2],
      },
      {
        id: 5,
        doseNumber: 2,
        periods: [Periods.MONTH_4],
      },
      {
        id: 6,
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
        id: 7,
        doseNumber: 1,
        periods: [Periods.MONTH_2],
      },
      {
        id: 8,
        doseNumber: 2,
        periods: [Periods.MONTH_4],
      },
      {
        id: 9,
        doseNumber: 3,
        periods: [Periods.MONTH_6],
      },
      {
        id: 10,
        doseNumber: 4,
        periods: [Periods.MONTH_15, Periods.MONTH_18],
      },
      {
        id: 11,
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
        id: 12,
        doseNumber: 1,
        periods: [Periods.MONTH_2],
      },
      {
        id: 13,
        doseNumber: 2,
        periods: [Periods.MONTH_4],
      },
      {
        id: 14,
        doseNumber: 3,
        periods: [Periods.MONTH_6],
      },
      {
        id: 14,
        doseNumber: 4,
        periods: [Periods.MONTH_12],
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
        id: 15,
        doseNumber: 1,
        periods: [Periods.MONTH_2],
      },
      {
        id: 16,
        doseNumber: 2,
        periods: [Periods.MONTH_4],
      },
      {
        id: 17,
        doseNumber: 3,
        periods: [Periods.MONTH_6],
      },
      {
        id: 18,
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
        id: 19,
        doseNumber: 1,
        periods: [Periods.MONTH_2],
      },
      {
        id: 20,
        doseNumber: 2,
        periods: [Periods.MONTH_4],
      },
      {
        id: 21,
        doseNumber: 3,
        periods: [
          Periods.MONTH_6,
          Periods.MONTH_12,
          Periods.MONTH_15,
          Periods.MONTH_18,
        ],
      },
      {
        id: 22,
        doseNumber: 4,
        periods: [Periods.YEARS_4_6],
      },
    ],
    color: "D0FAE6",
  },
];
