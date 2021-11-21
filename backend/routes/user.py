from fastapi  import APIRouter
from schemas.user import User

from models.user  import users
from config.db import conn  

user=APIRouter()

#listamos los usuarios
@user.get('/')
async def allusers():
 return  conn.execute(users.select()).fetchall()



#listamos un usuario en particular por su id
@user.get('/{id}')
async def get_info_by_iduser(id: int):
 return  conn.execute(users.select().where(users.c.id == id)).first()



#insertamos un nuevo usuario
@user.post('/newuser')
async def newuser(user: User):
     conn.execute(users.insert().values(
         name=user.name,
         surname=user.surname,
         age=user.age,
         dateofbirth=user.dateofbirth
     ))
     return  conn.execute(users.select()).fetchall()


     #cambiamos la informacion del usuario
@user.put('/{id}')
async def changeinfouser(id:int, user:User):
    conn.execute(users.update().values(
         name=user.name,
         surname=user.surname,
         age=user.age,
         dateofbirth=user.dateofbirth
     ).where(users.c.id == id))
    return  conn.execute(users.select()).fetchall()






 #eliminamos el usuario
@user.delete('/{id}')
async def removeuser(id:int):
  conn.execute(users.delete().where(users.c.id==id))
  return conn.execute(users.select()).fetchall()