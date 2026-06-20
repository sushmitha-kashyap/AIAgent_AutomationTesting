# from typing import TypedDict

# class QAState(TypedDict):
#     swagger_url: str
#     requirement: str
#     api_spec: str
#     test_cases: list
#     results: list
#     report: str
#     email_status: str

from typing import TypedDict

class QAState(TypedDict):
    swagger_url: str
    requirement: str

    api_spec: str
    base_url: str

    test_cases: list
    results: list

    report: str
    email_status: str