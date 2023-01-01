# Frontend do teste para dev fullstack medcloud

## Configurando endereço http da API

Na raiz do projeto frontend crie um arquivo **.env** e digite VITE_BASE_URL=**ENDEREÇO DA SUA API**.

### Rodando o projeto localmente

Na pasta raiz do frontend rode o comando `npm i` para instalar os pacotes.
Em seguida rode o comando `npm run dev` para iniciar o servidor da aplicação.

#### Rodando o projeto com docker

Na pasta raiz do frontend rode o comando `docker-compose up` para iniciar o build da aplicação com o docker. (Nescessario ter o docker instalado na sua máquina)

##### Algumas das tecnologias utilizadas

-   **Vite** para ter mais produtividade em ambiente de desenvolvimento com a velocidade que ele oferece.
-   **Axios** para fazer o consumo da API.
-   **MUI** como biblioteca de UI.
-   **sass** para estilização do jsx.
-   **yup** e **formik** para validar os campos do input mais facilmente.
-   **husky** e **lint-staged** para evitar commits com erros de lint no codigo.
