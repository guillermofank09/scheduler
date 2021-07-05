import { useState } from "react";
import Patient from "types/Patient";
import { Vaccine, VaccineDose, Periods } from "types/Vaccine";
import {
  Table,
  Accordion,
  Header,
  Container,
  Segment,
  Icon,
} from "semantic-ui-react";
import { useIsNotMobile } from "hooks/ResposiveHook";
import {
  TableHeader,
  VaccineCell,
  DoseDescription,
  DoseTitle,
  VaccineTitle,
} from "./styled";
import { getDoseOrdinal } from "helpers";
import Dose from "./components/Dose";

interface Props {
  patient: Patient;
  vaccines: Vaccine[];
}

export const Scheduler = ({ patient, vaccines }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const isNotMobile = useIsNotMobile();
  const title = isNotMobile
    ? `${patient.firstName} ${patient.lastName} - Vaccination Schedule (${patient.dateOfBirth})`
    : "Vaccination Schedule";

  const handleClick = (e: any, titleProps: any) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };

  const renderCell = (period: Periods, vaccine: Vaccine) => {
    let selectedDose: { color: string; doseNumber: number } | undefined;
    let patientDose: VaccineDose | undefined;
    vaccine.doses.forEach((dose) => {
      dose.periods.forEach((dosePeriod) => {
        if (dosePeriod === period) {
          selectedDose = { color: vaccine.color, doseNumber: dose.doseNumber };
        }
      });
    });
    patient.vaccines
      .find((patientVaccine) => patientVaccine.name === vaccine.name)
      ?.doses.forEach((patientVaccineDose) => {
        if (patientVaccineDose.appliedPeriod === period) {
          patientDose = patientVaccineDose;
        }
      });
    return (
      <Table.Cell
        key={period}
        bgcolor={selectedDose ? vaccine.color : ""}
        textAlign="center"
      >
        {patientDose ? (
          <Dose vaccineDose={patientDose} name={vaccine.name} />
        ) : (
          ""
        )}
      </Table.Cell>
    );
  };

  const findPatientVaccine = (vaccineName: string, doseNumber: number) => {
    return (
      patient.vaccines
        .find((vaccine) => vaccine.name === vaccineName)
        ?.doses.find((dose) => dose.doseNumber === doseNumber)?.appliedPeriod ||
      "No yet"
    );
  };

  const renderVaccineMobile = (vaccine: Vaccine) => {
    return (
      <Container style={{ margin: 20 }}>
        <Accordion key={vaccine.id}>
          <Accordion.Title
            active={activeIndex === vaccine.id}
            index={vaccine.id}
            key={vaccine.id}
            onClick={handleClick}
          >
            <VaccineTitle as="h3" color={vaccine.color}>
              <Icon name="dropdown" />
              {vaccine.name}
            </VaccineTitle>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === vaccine.id}>
            {vaccine.doses.map((vaccineDose) => (
              <>
                <DoseTitle>{getDoseOrdinal(vaccineDose.doseNumber)}</DoseTitle>
                <div>
                  <div>
                    <DoseDescription>
                      Expected:{" "}
                      {vaccineDose.periods.length
                        ? vaccineDose.periods.length > 1
                          ? `${vaccineDose.periods[0]} - ${
                              vaccineDose.periods[
                                vaccineDose.periods.length - 1
                              ]
                            }`
                          : vaccineDose.periods[0]
                        : " - "}
                    </DoseDescription>
                  </div>
                  <div>
                    <DoseDescription>
                      Applied:{" "}
                      {findPatientVaccine(vaccine.name, vaccineDose.doseNumber)}
                    </DoseDescription>
                  </div>
                </div>
              </>
            ))}
          </Accordion.Content>
        </Accordion>
      </Container>
    );
  };

  if (!vaccines.length) {
    return (
      <Segment placeholder>
        <Header icon>
          <Icon name="calendar times outline" />
          <div>Ops, there are no vaccines to show rigth now.</div>
          <div>Please, try again later!</div>
        </Header>
      </Segment>
    );
  }

  return isNotMobile ? (
    <Container style={{ margin: 20, width: "90%" }}>
      <Header as="h3" textAlign="center">
        {title}
      </Header>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <TableHeader textAlign="center">{"Vaccine"}</TableHeader>
            {Object.values(Periods).map((period) => (
              <TableHeader key={period} textAlign="center">
                {period}
              </TableHeader>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {vaccines.map((vaccine) => (
            <Table.Row key={vaccine.id}>
              <VaccineCell>{vaccine.name}</VaccineCell>
              {Object.values(Periods).map((period) =>
                renderCell(period, vaccine)
              )}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  ) : (
    <Container style={{ margin: 20, padding: 10 }}>
      <Header as="h3" style={{ marginTop: 20 }}>
        {title}
      </Header>
      <Header as="h4">{`${patient.firstName} ${patient.lastName} (${patient.dateOfBirth})`}</Header>
      {vaccines.map((vaccine) => renderVaccineMobile(vaccine))}
    </Container>
  );
};
