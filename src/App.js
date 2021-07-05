import { Scheduler } from "components/pages/Scheduler";
import { Patients } from "mocks/Patient";
import { Vaccines } from "mocks/Vaccine";
import "semantic-ui-css/semantic.min.css";

const App = () => {
  return <Scheduler patient={Patients[0]} vaccines={Vaccines} />;
};

export default App;
