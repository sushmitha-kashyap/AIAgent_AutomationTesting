function ResultTable() {
  return (
    <div className="bg-white rounded-xl shadow p-8">

      <h2 className="text-2xl font-semibold mb-5">
        Execution Results
      </h2>

      <table className="w-full">

        <thead className="border-b">

          <tr>

            <th className="text-left p-3">Scenario</th>
            <th className="text-left p-3">Expected</th>
            <th className="text-left p-3">Actual</th>
            <th className="text-left p-3">Status</th>

          </tr>

        </thead>

      </table>

    </div>
  );
}

export default ResultTable;