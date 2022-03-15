import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
   
    categoriesRepository.create({ name, description })
    

    return response.status(201).send();
})

export { categoriesRoutes };
//uuid - identificador unico universal
// repositórios - São responsaveis por fazer toda a manipulação 
// de dados da aplicação, acesso a bd, select e etc

