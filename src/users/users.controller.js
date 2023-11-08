import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    user= {
        nombre: "Kevin",
        apellido: "Padilla",
    }
    @Get()
    findAllUsers(){
        return this.user
    }
}
