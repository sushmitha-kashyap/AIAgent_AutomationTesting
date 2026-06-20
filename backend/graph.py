from langgraph.graph import StateGraph, START, END
from backend.state import QAState
from backend.agent.test_case_gen import test_agent
from backend.agent.test_case_executor import executor_agent
from backend.agent.api_spec_agent import api_spec_agent
from backend.agent.report_agent import report_agent
from backend.agent.email_agent import email_agent

builder = StateGraph(QAState)

builder.add_node("test_agent", test_agent)
builder.add_node("executor_agent",executor_agent)
builder.add_node("api_spec_agent",api_spec_agent)
builder.add_node("report_agent",report_agent)
builder.add_node("email_agent",email_agent)


builder.add_edge(START, "api_spec_agent")
builder.add_edge("api_spec_agent","test_agent")
builder.add_edge("test_agent","executor_agent")
builder.add_edge("executor_agent", "report_agent")
builder.add_edge("report_agent","email_agent")
builder.add_edge("email_agent",END)

graph = builder.compile()

