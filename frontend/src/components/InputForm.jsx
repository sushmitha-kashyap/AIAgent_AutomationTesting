import { useState } from "react";
import axios from "axios";

function InputForm() {

  const [swaggerUrl, setSwaggerUrl] = useState("");
  const [requirement, setRequirement] = useState("");

  const [testCases, setTestCases] = useState([]);
  const [results, setResults] = useState([]);
  const [report, setReport] = useState("");

  async function handleSubmit() {

    const response = await axios.post(
      "http://127.0.0.1:8000/run-tests",
      {
        swagger_url: swaggerUrl,
        requirement
      }
    );

    setTestCases(response.data.test_cases);
    setResults(response.data.results);
    setReport(response.data.report);
  }

  return (
    <div>

      <input
        placeholder="Swagger URL"
        value={swaggerUrl}
        onChange={(e)=>setSwaggerUrl(e.target.value)}
      />

      <textarea
        placeholder="Requirement"
        value={requirement}
        onChange={(e)=>setRequirement(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Run Tests
      </button>

    </div>
  );
}

export default InputForm;