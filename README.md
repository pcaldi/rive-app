# Animações com Rive

- Primeiro passo é criar o projeto em Blank (Bare)
- Depois alteramos os arquivos App/index para .tsx
- Em package alteremos o index.js para tsx também
> Rodamos o comando para converter em TypeScript;
```
npx expo start
```
> Install expo-custom-assets
```
npx expo install expo-custom-assets
```
- Configuramos para ele automatizar e dinamicamente levar o arquivo,
- tanto para o android ou para o ios.

- Crio a pasta resource onde vai receber as animações
- Após instalar o pacote e criar a pasta adiciono o plugin ao seu app.json
```
"plugins": [
      [
        "expo-custom-assets",
        {
          "assetsPaths": [
            "./src/resources"
          ]
        }
      ]
    ]

```
- Adiciono o arquivo de animação .riv na pasta resource
- Após isso rodo o comando de prebuild
```
npx expo prebuild
```
- Install a biblioteca do rive
```
npx expo install rive-react-native
```
