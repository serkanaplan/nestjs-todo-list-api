import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { Todo } from "./todo.interface";

@Controller("todo")
export class TodoController {

    private readonly logger =new Logger(TodoController.name)

    constructor(private readonly todoService: TodoService) { }

    @Get()
    findAll(): Todo[] {
        this.logger.log('Handling findAll() request...');
        return this.todoService.findAll();
    }

    @Get(':id')
    findOne(@Param("id",ParseIntPipe) id: number): Todo {
        this.logger.log('Handling findOne() requestwithid='+id+'...');
        return this.todoService.findOne(id);
    }

    @Post()
    create(@Body() todo: Todo): void {
        this.logger.log('Handling create() request...'+todo.id + todo.label + todo.complete);
        this.todoService.create(todo);
    }

    @Put(':id')
    update(@Param("id",ParseIntPipe) id: number, @Body() todo: Todo): Todo {
        this.logger.log('Handlingupdate()requestwithid='+id+'...');
        return this.todoService.update(id,todo);
    }

    @Delete(':id')
    delete(@Param("id",ParseIntPipe) id: number): void {
        this.logger.log('Handling delete()requestwithid='+id+'...');
        this.todoService.delete(id);
    }
    
}