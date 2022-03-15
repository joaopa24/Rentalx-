import { Router } from 'express';
import { Category } from '../model/Category';

const categoriesRoutes = Router();

const categories:Category[] = []

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const category = new Category();
    Object.assign(category, {
        name,
        description,
        created_at:new Date(),
    })
    
    categories.push(category)

    return response.status(201).json({ category });
})

export { categoriesRoutes };
//uuid - identificador unico universal
// repositórios - São responsaveis por fazer toda a manipulação 
// de dados da aplicação, acesso a bd, select e etc

