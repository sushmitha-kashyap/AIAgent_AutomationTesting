# import json
# import re
# from backend.llm import chat_model
# from backend.prompts.test_prompt import TEST_PROMPT


# def test_agent(state):
#     prompt = TEST_PROMPT.format(
#     requirement=state["requirement"],
#     api_spec=state["api_spec"]
#     )

#     response = chat_model.invoke(prompt)
#     content = response.content

#     content = re.sub(r"```json", "", content)
#     content = re.sub(r"```", "", content)
#     test_cases = json.loads(content)

#     return {"test_cases": test_cases}

import json
import re

from backend.llm import chat_model
from backend.prompts.test_prompt import TEST_PROMPT


def test_agent(state):

    prompt = TEST_PROMPT.format(
        requirement=state["requirement"],
        api_spec=state["api_spec"]
    )

    response = chat_model.invoke(prompt)

    content = response.content

    content = re.sub(r"```json", "", content)
    content = re.sub(r"```", "", content)

    test_cases = json.loads(content.strip())

    return {
        "test_cases": test_cases
    }