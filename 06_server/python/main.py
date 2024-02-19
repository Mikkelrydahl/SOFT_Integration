from fastapi import FastAPI

app = FastAPI

@app.get("/")
def root():
    return {"message": "Welcome to our first server"}

@app.get("/Firstroute")
def root():
    return {"message" : "This is the first route"}