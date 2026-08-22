import requests
def executor_agent(state):
    test_cases = state["test_cases"]
    base_url = state["base_url"]
    results = []

    for tc in test_cases:
        url = base_url + tc["endpoint"]
        try:
            response = requests.request(
                method=tc["method"],
                url=url,
                json=tc["input"]
            )
            actual_status = response.status_code
            status = (
                "PASS"
                if actual_status == tc["expected_status"]
                else "FAIL"
            )
            try:
                response_body = response.json()
            except:
                response_body = response.text
            results.append(
                {
                    "scenario": tc["scenario"],
                    "endpoint": tc["endpoint"],
                    "expected_status": tc["expected_status"],
                    "actual_status": actual_status,
                    "status": status,
                    "response": response_body
                }
            )
        except Exception as e:
            results.append(
                {
                    "scenario": tc["scenario"],
                    "endpoint": tc["endpoint"],
                    "expected_status": tc["expected_status"],
                    "actual_status": None,
                    "status": "ERROR",
                    "error": str(e)
                }
            )

    return {
        "results": results
    }
