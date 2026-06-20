import Navbar from "../components/Navbar";
import InputCard from "../components/InputCard";
import ApiSpecCard from "../components/ApiSpecCard";
import TestCaseTable from "../components/TestCaseTable";
import ResultTable from "../components/ResultTable";
import ReportCard from "../components/ReportCard";
import EmailStatusCard from "../components/EmailStatusCard";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">

        <InputCard />

        <ApiSpecCard />

        <TestCaseTable />

        <ResultTable />

        <ReportCard />

        <EmailStatusCard />

      </div>

    </div>
  );
}

export default Dashboard;