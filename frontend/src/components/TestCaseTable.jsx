function TestCaseTable({ testCases }) {

  return (

    <div className="bg-white rounded-xl shadow p-8">

      <h2 className="text-2xl font-semibold mb-5">
        Generated Test Cases
      </h2>

      <table className="w-full">

        <thead>

          <tr>
            <th>Scenario</th>
            <th>Method</th>
            <th>Endpoint</th>
            <th>Expected</th>
          </tr>

        </thead>

        <tbody>

          {testCases.map((tc, index) => (

            <tr key={index}>

              <td>{tc.scenario}</td>
              <td>{tc.method}</td>
              <td>{tc.endpoint}</td>
              <td>{tc.expected_status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TestCaseTable;