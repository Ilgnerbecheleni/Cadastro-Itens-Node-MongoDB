# Cadastro Itens Node e MongoDB

<p>Aplicação simples e apenas didática de um pequeno CRUD com autenticação de usuário , utilizando uma API node + MongoDB , podemos cadastrar itens em uma tabela e visualizar
os dados cadastrados , porém , apenas mediante a autenticação .
</p>




<hr>
<h1>Utilização da API </h1>

<p>No visual Studio Code :</p>

<ol>
<li>Abra a pasta API;</li>
<li>Abra o terminal e execute o comando : 

```
npm install
```
</li>
<li>Instale o Mongo DB compass e configure uma conexão local</li>
<li>Certifique de que a conexão está configurada na api no arquivo api.js no trecho :

```
mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true });//conecta ao mongoDB
```
</li>
<li>Com os modulos devidamente instalados e o banco configurado execute a API com o comando :

```
npm start
```
</li>
<li>A API irá rodar na porta 3000;</li>
<li>utilizando o Postman ou Insomnia , cadastre um usuario utilizando o endpoint:

```
localhost:3000/users 
```
</li>
<li>
Passe o objeto via método Post:

```
{
"username":"usuario",
"password":"senha8digitos"
}
```
</li>

<li>
Com a API rodando e configurada , acesse o arquivo HTML e faça o login no usuario e senha cadastrados anteriormente.
</li>


</ol>
<hr>

<h1>Utilizando o Sistema </h1>
<ol>
<li>Acesse o arquivo login.html ;</li>
<li>Faça o login com usuario e senha cadastrado na API , vide tutorial de uso da API ;</li>
<li>Com usuario logado irá retornar o token necessário para fazer a consulta na tabela itens ;</li>
<li>Se o login estiver certo você será redirecionado para a tela de cadastro de itens .</li>

</ol>
