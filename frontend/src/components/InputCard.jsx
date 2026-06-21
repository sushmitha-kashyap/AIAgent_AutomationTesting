import { useState } from "react";
import axios from "axios";

function InputCard({
  setApiSpec,
  setTestCases,
  setResults,
  setReport,
  setEmailStatus
}) {

  const [swaggerUrl, setSwaggerUrl] = useState("");
  const [requirement, setRequirement] = useState("");

  const runTests = async () => {

    const response = await axios.post(
   "http://127.0.0.1:8000/run-tests",
    {
    swagger_url: swaggerUrl,
    requirement
    }
);

setApiSpec(response.data.api_spec);
setTestCases(response.data.test_cases);
setResults(response.data.results);
setReport(response.data.report);
setEmailStatus(response.data.email_status);

  };

  return (
    <div className="bg-white rounded-xl shadow p-8">

      <h2 className="text-2xl font-semibold mb-6">
        Input
      </h2>

      <div className="space-y-5">

        <div>

          <label className="font-medium block mb-2">
            Swagger URL
          </label>

          <input
            className="w-full border rounded-lg p-3"
            placeholder="https://petstore.swagger.io/v2/swagger.json"
            value={swaggerUrl}
            onChange={(e) => setSwaggerUrl(e.target.value)}
          />

        </div>

        <div>

          <label className="font-medium block mb-2">
            Requirement
          </label>

          <textarea
            rows={4}
            className="w-full border rounded-lg p-3"
            placeholder="Login API should reject invalid password"
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
          />

        </div>

        <button
          onClick={runTests}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
        >
          Run Tests
        </button>

      </div>

    </div>
  );
}

export default InputCard;