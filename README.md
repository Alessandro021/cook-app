# App de receitas - Cook App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/Alessandro021/app-de-financas)](https://github.com/Alessandro021/app-de-financas/issues)
![GitHub repo size](https://img.shields.io/github/repo-size/alessandro021/app-de-financas)
![GitHub contributors](https://img.shields.io/github/contributors/alessandro021/app-de-financas)
![GitHub forks](https://img.shields.io/github/forks/Alessandro021/app-de-financas?style=social)
![GitHub stars](https://img.shields.io/github/stars/alessandro021/app-de-financas?style=social)

<p align="justify">
Imagine chegar em casa com fome depois de um dia de muito trabalho e lembrar que você esqueceu de passar no mercado para fazer as compras da semana. Então você decide abrir a geladeira pra fazer uma janta com o que já tem em casa, mas está sem muita criatividade pra cozinhar. É esse problema que o Cook App pode resolve! Nessa aula do evento React Native na prática vamos criar uma aplicação que sugere receitas conforme os ingredientes selecionados usando React Native, Expo, Expo router, Supabase e React Native reanimated.
</p>

## Funcionalidades

-selecionar produtos para a receita
- excluir produtos selecionados
- selecionar produto

## Tecnologias Utilizadas
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Supabase](https://supabase.com/)
- [Reanimated](https://docs.expo.dev/versions/latest/sdk/reanimated/)
- [TypeScript](https://docs.expo.dev/guides/typescript/)
- [Eslint](https://eslint.org/docs/latest/use/getting-started)

## Como rodar o projeto

1. Clone este repositório
2. Instale as dependências com `npm install` ou `yarn`
3. Crie uma conta no [supabase](https://supabase.com/) e crie um projeto.
4. No Supabase, crie as tabelas ingredients, preparations, recipes e recipes_ingredients.
5. Configure as variáveis de ambiente no arquivo `.env` com as suas credenciais do seu projto no supabase:
```.env
EXPO_PUBLIC_SUPABASE_URL=
EXPO_PUBLIC_IMAGE_PATH_STORAGE=
EXPO_PUBLIC_SUPABASE_ANON_KAY=

```
6. Inicie o projeto com `expo start`, `npm start` ou `npx expo start`

## Screenshots

<p align="left">
  <img src="https://live.staticflickr.com/65535/53571865748_a4952b2650_o.png" alt="Cronômetro" width="300">
  <img src="https://live.staticflickr.com/65535/53571989249_697410f01b_o.png" alt="Cronômetro" width="300">
  <img src="https://live.staticflickr.com/65535/53571865768_5f51ee3e7d_o.png" alt="Cronômetro" width="300">
</p>

## Como Contribuir
1. Faça um fork deste repositório
2. Crie uma branch para sua feature (`git checkout -b feature/sua-feature`)
3. Faça commit de suas alterações (`git commit -am 'Add some feature'`)
4. Faça push para a branch (`git push origin feature/sua-feature`)
5. Abra um Pull Request

## Licença
Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.