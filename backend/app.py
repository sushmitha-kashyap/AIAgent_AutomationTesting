from fastapi import FastAPI
from pydantic import BaseModel
from backend.graph import graph

app = FastAPI()


class TestRequest(BaseModel):
    swagger_url: str
    requirement: str

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/run-tests")
def run_tests(request: TestRequest):

    try:
        response = graph.invoke(
            {
                "swagger_url": request.swagger_url,
                "requirement": request.requirement
            }
        )
        return response

    except Exception as e:
        import traceback

        traceback.print_exc()

        return {
            "error": str(e)
        }
