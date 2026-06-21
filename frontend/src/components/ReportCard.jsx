function ReportCard({ report }) {

  return (

    <div className="bg-white rounded-xl shadow p-8">

      <h2 className="text-2xl font-semibold mb-5">
        Test Report
      </h2>

      <div className="bg-slate-100 p-5 rounded-lg whitespace-pre-wrap">

        {report || "Report will appear here"}

      </div>

    </div>

  );
}

export default ReportCard;