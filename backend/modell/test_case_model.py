from pydantic import BaseModel
from typing import Dict, List

class TestCase(BaseModel):
    scenario: str
    method: str
    endpoint: str
    input: Dict
    expected_status: int

class TestCaseList(BaseModel):
    test_cases: List[TestCase]