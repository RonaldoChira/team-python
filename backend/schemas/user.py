from datetime import date
from pydantic import BaseModel

class User(BaseModel):
    name: str
    surname: str
    age: int
    dateofbirth: date
