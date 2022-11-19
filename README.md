<h1 align="center">
  <img src="assets\imgs\logoHome\logo.png" width="200" alt="icon" >
  <br>
  Cruzeiro Card’Wallet App
  <br>
</h1>

<p align="center">Carteira de cartões, organização de dados.</p>

<p align="center">
   <img src="readme/gif1.gif" alt="Demo" >
</p>
<p align="center">
   <img src="readme/gif2.gif" alt="Demo" width="350" height="700" >
   <img src="readme/gif3.gif" alt="Demo" width="350" height="700" >
   <img src="readme/gif4.gif" alt="Demo" width="350" height="700" >
   <img src="readme/gif5.gif" alt="Demo" width="350" height="700" >
</p>
<p align="center">
   <img src="readme/gif6.gif" alt="Demo" >
</p>

## 📅 Sobre

Aplicação desenvolvida para o Projeto Integrador Transdisciplinar (PIT), para a universidade Cruzeiro do Sul, objetivo é auxiliar na organização de cartões, o app é uma carteira digital com possibilidade de adicionar dados digitais de cartões reais. O app tem como alterar e/ou adicionar o vencimento da fatura, o melhor dia de compra, bandeira (MasterCard ou Visa), número final do cartão, entidade bancaria, senha e permite customizar a cor de cada cartão. Os dados são salvos e persistentes na memória do dispositivo e ainda conta com notificações com o OneSignal.

## 🔔 Notificações | OneSignal

Para enviar notificações você precisa ter uma conta em onesignal.com, após as configuração basta colocar o App ID: em `OneSignal.init('')` dentro do `useEffect` no componente Home.js, assim:
<br /><br />
`import OneSignal from 'react-native-onesignal'`
<br /><br />
`useEffect(() => {`<br />
    `OneSignal.init('APP ID')`<br />
    `OneSignal.addEventListener('opened', onOpened)`<br />
    `return () => OneSignal.removeEventListener('opened', onOpened)`<br />
`}, [])`
<br /><br />
ID:<br />
<p align="center">
   <img src="readme/screenshoot.png" alt="Image" >
</p>

## 🛠 Tecnologias
- [React Native](https://facebook.github.io/react-native/)
- [Javascript](https://devdocs.io/javascript/)
- [Node](https://nodejs.org/en/)
<br/>-<br/>
- [Async Storage](https://react-native-async-storage.github.io/async-storage/)
- [Lottie](https://airbnb.io/lottie/#/)
- [Moment](https://momentjs.com/)
- [Linear-Gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient)
- [OneSignal](https://documentation.onesignal.com/docs/react-native-sdk-setup)

*Foram usados outros Frameworks no projeto, mas esses são os principais.*

## 📱 Executando

Para executar o projeto é necessário que você tenha o ambiente React Native configurado, você pode seguir esse [GUIA](https://reactnative.dev/docs/environment-setup) para tal.

Depois de configurar o ambiente, basta fazer o clone do projeto:

```sh
git clone https://github.com/JhonatanBergmann/cruzeiro-card-wallet.git
```

Entre na pasta do projeto e execute o comando para instalar as dependências do projeto:

```sh
yarn install
```
ou
```sh
npm install
```

Em seguida execute o comando referente a plataforma ao qual deseja executar:

Android:

```sh
react-native run-android
```

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
 Feito com 💜 WANDER MACIEL BARRETO, WILLIAM HENRIQUE LAURIANO, SAMUEL RODRIGUES ÁVILA, JHONATAN BERGMANN DIAS

</p>
