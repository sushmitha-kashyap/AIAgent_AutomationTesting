function EmailStatusCard({ emailStatus }) {

  return (

    <div className="bg-white rounded-xl shadow p-8">

      <h2 className="text-2xl font-semibold mb-5">
        Email Status
      </h2>

      <div className="text-green-600 font-semibold">

        {emailStatus || "Waiting to send email..."}

      </div>

    </div>

  );
}

export default EmailStatusCard;