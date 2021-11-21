from sqlalchemy import  Table,Column
from sqlalchemy.sql.sqltypes import Date, Integer, String
from config.db import meta,engine


users=Table('users',meta,
Column('id',Integer,primary_key=True),
Column('name',String(50)),
Column('surname',String(50)),
Column('age',Integer),
Column('dateofbirth',Date()),
)



meta.create_all(engine)