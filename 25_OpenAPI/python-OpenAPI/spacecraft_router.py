from fastapi import APIRouter
from pydantic import BaseModel

class Spacecraft(BaseModel):
    id: int
    name: str

Spacecrafts = [
    Spacecraft (id =0 , name="Apollo 13"),
    Spacecraft (id =1 ,name="Hubble"),
    Spacecraft (id =2 ,name="ISS"),
]

router = APIRouter()

@router.get("/api/spacecrafts", tags=("Spacecrafts"), response_model=list[Spacecraft])
async def _():
    return Spacecraft

@router.get("/api/spacecrafts/{spacecraft_id}", tags=("Spacecrafts"), response_model=Spacecraft)
async def _():
    for spacecraft in spacecrafts:
        if spacecraft.id == spacecraft_id:
             return Spacecraft
        
    raise HTTPException(status_code=404, detail="Spacecraft not found")