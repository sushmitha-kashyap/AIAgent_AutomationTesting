import { useState } from "react";
import axios from "axios";

function InputCard({
  setApiSpec,
  setTestCases,
  setResults,
  setReport,
  setEmailStatus,
}) {
  const [swaggerUrl, setSwaggerUrl] = useState("");
  const [requirement, setRequirement] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/run-tests",
        {
          swagger_url: swaggerUrl,
          requirement: requirement,
        }
      );

      setApiSpec(response.data.api_spec);
      setTestCases(response.data.test_cases);
      setResults(response.data.results);
      setReport(response.data.report);
      setEmailStatus(response.data.email_status);
    } catch (error) {
      console.log(error);
      alert("Error running tests");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <input
        className="w-full border p-3 rounded mb-4"
        placeholder="Swagger URL"
        value={swaggerUrl}
        onChange={(e) => setSwaggerUrl(e.target.value)}
      />

      <textarea
        className="w-full border p-3 rounded mb-4"
        rows="4"
        placeholder="Requirement"
        value={requirement}
        onChange={(e) => setRequirement(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        {loading ? "Running..." : "Run Tests"}
      </button>

    </div>
  );
}

export default InputCard;