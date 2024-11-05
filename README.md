# Modelo de Projeto Frontend Mobile em React Native TS com EXPO

## Navegações implementadas
- Navegação por Drawer;
- Navegação por Stack;
- Navegação por Tab;

Todas as navegações podem ser modificadas, trocadas ou eliminadas.

## Componentes customizáveis
- Componente customizável para botão;
- Componente customizável para imagem;
- Componente customizável para modal;
- Componente customizável para tela;
- Componente de loading;
- Tela pré definida para administrador;
- Tela pré definida para home;

Os componentes customizáveis são de uso pronto e genérico.
A tela de administrador possui exemplo de controle de autenticação.

## Contexts implementados
- Context de início da aplicação;
  - Completamente customizável para as regras de negócio da aplicação;
  - Não interfere se não usado;
- Context de autenticação;
  - State para controle de login;
  - Pode-se utilizar useTransaction para lidar com renderizações desnecessárias;
  - Não interfere se não usado;
- Context de sincronização;
  - Possui REFs para controle de conectividade e verificação de sincronização;
  - Não interfere se não usado;

## Funcionalidades para backend, base de dados, async storage e env
- Banco de dados sqlite local;
  - Possui controlador de versão;
- Buscador de variáveis de ambiente;
- Controlador do AsyncStorage;
- Firebase;
- Service customizada para backend da aplicação;
  - Extende a classe "Endpoints" que possui métodos implementados para todas as requisições base;
  - Possui "ServiceExample.ts.example" para exemplo de utilização

## Funcionalidades e utilidades
- Botão acionador de câmera;
- Botão de autenticação por biometria / PIN;
- Controlador para rotas autenticadas;
  - **Necessita de ajustes conforme as regras de negócio da aplicação!**
- Enviador de notificação local;
- Função especializada na captura de informações de conectividade;
- Função verificadora de valores nulos / indefinidos;