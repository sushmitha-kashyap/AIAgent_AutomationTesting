function TestCaseTable() {
  return (
    <div className="bg-white rounded-xl shadow p-8">

      <h2 className="text-2xl font-semibold mb-5">
        Generated Test Cases
      </h2>

      <table className="w-full">

        <thead className="border-b">

          <tr>

            <th className="text-left p-3">Scenario</th>
            <th className="text-left p-3">Method</th>
            <th className="text-left p-3">Endpoint</th>
            <th className="text-left p-3">Expected Status</th>

          </tr>

        </thead>

        <tbody>

        </tbody>

      </table>

    </div>
  );
}

export default TestCaseTable;