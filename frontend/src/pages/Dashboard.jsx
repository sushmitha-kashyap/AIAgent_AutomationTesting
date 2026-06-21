import { useState } from "react";

import Navbar from "../components/Navbar";
import InputCard from "../components/InputCard";
import ApiSpecCard from "../components/ApiSpecCard";
import TestCaseTable from "../components/TestCaseTable";
import ResultTable from "../components/ResultTable";
import ReportCard from "../components/ReportCard";
import EmailStatusCard from "../components/EmailStatusCard";

function Dashboard() {

  const [apiSpec, setApiSpec] = useState("");
  const [testCases, setTestCases] = useState([]);
  const [results, setResults] = useState([]);
  const [report, setReport] = useState("");
  const [emailStatus, setEmailStatus] = useState("");

  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">

        <InputCard
          setApiSpec={setApiSpec}
          setTestCases={setTestCases}
          setResults={setResults}
          setReport={setReport}
          setEmailStatus={setEmailStatus}
        />

        <ApiSpecCard apiSpec={apiSpec} />

        <TestCaseTable testCases={testCases} />

        <ResultTable results={results} />

        <ReportCard report={report} />

        <EmailStatusCard emailStatus={emailStatus} />

      </div>

    </div>
  );
}

export default Dashboard;