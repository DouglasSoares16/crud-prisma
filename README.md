# CRUD com Prisma

## Rotas

### `GET`
- `/users` - Listar todos os usuários
- `/techs` - Listar todas as tecnologias
- `/users/:user_id/addresses` - Listar todos os endereços de um usuário
- `/users/:user_id/techs` - Listar todas as tecnologias de um usuário

### `POST`
- `/users` - Cadastrar um usuário
  - `Body`:
    - `name: string`
    - `email: string`
    - `password: string`

</br>

- `/techs` - Cadastrar uma tecnologia
  - `Body`:
    - `name: string`
    - `type: ENUM(FRONT, BACK, FULLSTACK)`

</br>

- `/users/:user_id/addresses` - Cadastrar um endereço a um usuário
  - `Body`:
    - `zipcode: string`
    - `street: string`
    - `number: number`

</br>

- `/users/:user_id/techs` - Cadastrar uma tecnologia a um usuário
  - `Body`:
    - `tech_id: string`

</br>

### `DELETE`
  `/users/:id` - Deletar um usuário

### `PATCH`
- `/users/:id` - Atualizar o nome de um usuário
  - `Body`:
    - `name: string`