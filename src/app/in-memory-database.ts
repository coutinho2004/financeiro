import { InMemoryDbService } from 'angular-in-memory-web-api';

import { , Category } from './pages/categories/shared/category-model';

export class InMemoryDatabase implements InMemoryDbService{
  createDb(){
    const categories: Category[] = [
      {id: 1 , name: 'Moradia', description: 'Pagamentos de conta em casa'},
      {id: 2 , name: 'Saúde', description: 'Planos de Saúde e Remédios'},
      {id: 3 , name: 'Lazer', description: 'Cinema, Parques e Praia'},
      {id: 4 , name: 'Salário', description: 'Recebimento de Salário'},
      {id: 5 , name: 'Salário', description: 'Recebimento de Salário'},
    ];

    return {categories};
  }
}
