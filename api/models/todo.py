from database import db
from sqlalchemy_serializer import SerializerMixin

class Todo(db.Model, SerializerMixin):
    __tablename__ = 'todos'
    serialize_only = ('id', 'description', 'completed')
    id = db.Column(db.Integer, primary_key=True)
    completed = db.Column(db.Boolean)
    description = db.Column(db.String)

    def __init__(self, description):
        self.description = description
        self.completed = False

    def __repr__(self):
        return f'<ToDo: {self.description}>'