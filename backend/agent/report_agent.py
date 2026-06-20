
def report_agent(state):

    swagger_url = state["swagger_url"]
    requirement = state["requirement"]
    results = state["results"]

    total = len(results)

    passed = sum(
        1 for r in results
        if r["status"] == "PASS"
    )

    failed = total - passed

    pass_rate = round(
        (passed / total) * 100,
        2
    )

    report = f"""
==============================
     TEST EXECUTION REPORT
==============================

Swagger URL:
{swagger_url}

Requirement:
{requirement}

--------------------------------
Summary
--------------------------------
Total Tests : {total}
Passed      : {passed}
Failed      : {failed}
Pass Rate   : {pass_rate}%

--------------------------------
Detailed Results
--------------------------------
"""

    for result in results:

        report += (
            f"\nScenario : {result['scenario']}"
            f"\nExpected : {result['expected_status']}"
            f"\nActual   : {result['actual_status']}"
            f"\nStatus   : {result['status']}"
            "\n--------------------------------"
        )

    return {
        "report": report
    }