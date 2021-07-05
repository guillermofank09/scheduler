import styled from "styled-components";
import { Table, Header } from "semantic-ui-react";

export const TableHeader = styled(Table.HeaderCell)({
  color: "white!important",
  background: "black!important",
});

export const VaccineCell = styled(Table.Cell)({
  fontSize: "14px",
  fontWeight: "bold",
});

export const DoseTitle = styled("div")({
  margin: "15px 10px",
  fontWeight: "bold",
});

export const DoseDescription = styled("div")({
  margin: "15px 20px",
});

interface TitleProps {
  color: string;
}

export const VaccineTitle = styled(Header)<TitleProps>`
  background: ${(props) => props.color} !important;
`;
