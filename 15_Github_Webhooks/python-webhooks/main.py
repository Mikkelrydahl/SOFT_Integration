from fastapi import FastAPI, Request
import json

app = FastAPI()

@app.post("/githubwebhookjson")
async def github_webhook(request: Request):
    data = await request.body()
    print(data)
    return

@app.post("githubwebhooksjson")
async def github_webhook(request: Request):
    if request.headers.get("contains-type") == "application/x-www-form-urlencoded":
        form_data = await request.form()