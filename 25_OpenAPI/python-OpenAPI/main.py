from fastapi import FastAPI

app = FastAPI()

from routers imort spacecraft_router
app.include_router(spacecraft_router)