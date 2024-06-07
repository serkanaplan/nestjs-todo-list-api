import { Injectable } from "@nestjs/common";
import { Todo } from "./todo.interface";
import { randomInt } from "crypto";

@Injectable()
export class TodoService {
    private storage: Todo[] = [];

    findAll = (): Todo[] => this.storage

    findOne = (id: number): Todo => this.storage.find(t => t.id === id)

    create(todo: Todo): void {
        todo.id =  randomInt(1, 1000);
        this.storage.push(todo);
    }

    update = (id: number,todo: Todo): Todo => {
        const todoIndex = this.storage.findIndex((t:Todo) => t.id === id)
        this.storage[todoIndex] = todo
        return todo
    }

    delete = (id: number): void => {
        const todoIndex = this.storage.findIndex((t:Todo) => t.id === id)
        this.storage.splice(todoIndex, 1)
    }

}