from typing import TypedDict

class QAState(TypedDict):
    requirement: str
    api_spec: str
    test_cases: list
    results: list
    report: str
    email_status: str