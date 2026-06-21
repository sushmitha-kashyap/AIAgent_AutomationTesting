function ResultTable({ results }) {

  return (

    <div className="bg-white rounded-xl shadow p-8">

      <h2 className="text-2xl font-semibold mb-5">
        Execution Results
      </h2>

      <table className="w-full">

        <thead>
          <tr>
            <th>Scenario</th>
            <th>Expected</th>
            <th>Actual</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {results.map((r,index)=>(

            <tr key={index}>

              <td>{r.scenario}</td>
              <td>{r.expected_status}</td>
              <td>{r.actual_status}</td>
              <td>{r.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default ResultTable;