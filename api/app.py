import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_accept import accept
from flask_migrate import Migrate
from database import db
from models.todo import Todo

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = os.environ['DATABASE_URL']

migrate = Migrate(app, db)

db.init_app(app)

@app.cli.command("db-seed")
def seed():
    db.session.add(Todo('Learn Python'))
    db.session.add(Todo('Learn JS'))
    db.session.add(Todo('Learn Docker'))
    db.session.add(Todo('Rule the world'))
    db.session.commit()

@app.route('/todo', methods=['GET', 'POST'])
def todo():
    if request.method == 'POST':
        data = request.get_json()
        db.session.add(Todo(data['description']))
        db.session.commit()
    
    todos = [t.to_dict() for t in db.session.execute(db.select(Todo)).scalars()]
    return jsonify(todos=todos)


@app.route('/todo/<int:id>', methods=['GET', 'POST', 'DELETE'])
def update_todo(id):
    todo = db.get_or_404(Todo, id)

    if request.method == 'POST':
        data = request.get_json()
        completed = data['completed']
        todo.completed = completed
        db.session.commit()
        return jsonify(todo.to_dict())
    
    elif request.method == 'DELETE':
        db.session.delete(todo)
        db.session.commit()
        return ''

    return jsonify(todo.to_dict())
