from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI()

@app.post("/api/login")
def login(data: dict):
    username = data.get("username")
    password = data.get("password")

    if username != "testuser":
        return JSONResponse(
            status_code=401,
            content={"message":"Invalid username"}
        )
    if password == "":
        return JSONResponse(
            status_code=400,
            content={"message":"Password required"}
        )
    if password == "Test123!":
        return JSONResponse(
            status_code=200,
            content={"message":"Login successful"}
        )
    return JSONResponse(
        status_code=401,
        content={"message":"Invalid password"}
    )