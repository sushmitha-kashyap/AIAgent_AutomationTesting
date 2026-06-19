TEST_PROMPT ="""
You are an expert QA engineer.

Requirement:{requirement}
API specification:{api_spec}

Generate 3-5 API test cases.
Valid credentials are provided in the spec.
Return ONLY a valid JSON array.

Do NOT:
- explain anything
- add markdown
- write ```json

Format:
[
{{
"scenario":"",
"method":"",
"endpoint":"",
"input":{{}},
"expected_status":0
}}
]
"""