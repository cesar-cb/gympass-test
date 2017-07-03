# Gympass Test

## Instruções

1. Installar o  [NodeJs](https://nodejs.org/en/)
2. Installar o Gulp no ambiente global ```npm install -g gulp```
3. Installar as dependências do projeto ```npm install```
4. Rodar o comando ```gulp```

## Escolhas tecnicas

Estou utilizando Stylus como pré-processador CSS e Pug como template engine para o HTML, o que acaba facilitando no desenvolvimento e na organização do projeto.

Utilizo o ES6 para separar e organizar melhor o JS e aproveitar as novas features.

O Gulp serve para compilar o Stylus, Pug e o ES6 através do plugin do webpack. Nele também encontramos um plugin para reduzir o tamanho do arquivo das imagens, minificar o css e o js. Também utilizei o [Lost Grid](https://github.com/peterramsing/lost/) para criar um sistema de grid super simples.
