# Node.js
- Necess�rio instalar o Node.js para rodar a aplica��o
- Instalar vers�o 6.X ou superior
- N�o instalar vers�es �mpares pois n�o s�o LTS
- Para instalar o Node.js no linux (Ubuntu), usar o comando abaixo:
``` sh
$ sudo apt-get install -y nodejs
```
- Para instalar o Node.jjs no Windows, basta baixar o instalador diretamente na p�gina: [https://nodejs.org/en/](https://nodejs.org/en/ "https://nodejs.org/en/")

# Visual Studio Code
- O Visual Studio Code � um editor gratuito e multiplataforma (Mac, Linux e Windows) que se integra muito bem com o TypeScript com zero esfor�o por parte do desenvolvedor. Voc� pode baix�-lo no endere�o [https://code.visualstudio.com/download](https://code.visualstudio.com/download "https://code.visualstudio.com/download")

# TypeScript
- Para que possamos utilizar o *TypeScript* precisamos da plataforma Node.js instalada
- � atrav�s do gerenciador de pacotes do Node.js que instalamos o *TypeScript*
- Para utilizar o gerenciador de pacotes, precisamos ter o arquivo *package.json* na nossa aplica��o
- Para criar o arquivo *package.json* mencionado acima, devemo acessar a pasta de nossa aplica��o por linha de comando e executar o comando abaixo:
``` sh
$ npm init
```
- Depois de termos nosso arquivo *package.json* criado, solicitamos a instala��o do *TypeScript* atrav�s do comando abaixo (a vers�o utilizada aqui foi a 2.3.2):
``` sh
$ npm install typescript@2.3.2 --save-dev
```
- Depois precisamos criar o arquivo *tsconfig.json*, o qual guardar� as configura��es do nosso compilador
- Para rodar o compilador, utilizamos o comando abaixo:
``` sh
$ npm run compile
```
- Para que o compilador seja executado sempre que salvarmos um arquivo, podemos utilizar o comando abaixo:
``` sh
$ npm start
```
- Para instalar o *TypeScript Declaration File* para o *jQuery* (este arquivo possui informa��es dos nomes de m�todos e fun��es, inclusive tipos que podem ser utilizados pelo *TypeScript*), utilizamos o comando abaixo (a vers�o utilizada foi a 2.0.42): 
``` sh
$ npm install @types/jquery@2.0.42 --save-dev
```
- Reposit�rio *git* que centraliza arquivos *tsd* para diversas bibliotecas: [https://github.com/DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped "https://github.com/DefinitelyTyped/DefinitelyTyped")

# Instalar e rodar a API
1. Descompactar o arquivo *api.zip* numa pasta fora do projeto
2. Acessar a pasta (extra�da) por linha de comando
3. Executar o comando abaixo:
 ```sh
$ npm start
```