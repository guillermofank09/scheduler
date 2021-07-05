import { VaccineDose } from "types/Vaccine";
import { Popup, Button } from "semantic-ui-react";
import { getDoseOrdinal } from "helpers";

interface Props {
  vaccineDose: VaccineDose;
  name: string;
}

export const Dose = ({ vaccineDose, name }: Props) => {
  const { length } = vaccineDose.periods;
  const content = `${
    vaccineDose.periods
      ? `The ${getDoseOrdinal(
          vaccineDose.doseNumber
        )} of ${name} should be applied ${
          length > 1
            ? `between ${vaccineDose.periods[0]} and ${
                vaccineDose.periods[length - 1]
              }`
            : ` in the period of ${vaccineDose.periods[0]}`
        }`
      : getDoseOrdinal(vaccineDose.doseNumber)
  }`;

  return (
    <Popup
      content={content}
      trigger={
        <Button secondary>{getDoseOrdinal(vaccineDose.doseNumber)}</Button>
      }
    />
  );
};

export default Dose;
