const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();

// Conectar ao MongoDB
mongoose.connect('mongodb://db/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado ao MongoDB'))
.catch((err) => console.log('Erro ao conectar ao MongoDB:', err));

// Middlewares
server.use(cors());

// Middleware para aplicar o parsing de JSON apenas se não for GET
server.use((req, res, next) => {
  if (req.method !== 'GET') {
    express.json()(req, res, next);
  } else {
    next();
  }
});

// Middleware para aplicar o parsing de urlencoded apenas se não for GET
server.use((req, res, next) => {
  if (req.method !== 'GET') {
    express.urlencoded({ extended: true })(req, res, next);
  } else {
    next();
  }
});

// Definir o modelo Client com mongoose
const clientSchema = new mongoose.Schema({
  name: { type: String, required: true }
});
const Client = mongoose.model('Client', clientSchema);

// Rota para criar um novo cliente
server.post('/clients', async (req, res) => {
  try {
    const client = new Client(req.body); // Cria um novo cliente com os dados recebidos
    await client.save(); // Salva no banco de dados
    res.status(201).send(client); // Retorna o cliente criado
  } catch (error) {
    res.status(400).send({ error: 'Erro ao criar cliente' });
  }
});

// Rota simples
server.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Rota para atualizar um cliente pelo ID
server.put('/clients/:id', async (req, res) => {
  try {
    const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Retorna o cliente atualizado
      runValidators: true // Verifica se os dados estão válidos antes de atualizar
    });
    
    if (!client) {
      return res.status(404).send({ error: 'Cliente não encontrado' });
    }

    res.status(200).send(client); // Retorna o cliente atualizado
  } catch (error) {
    res.status(400).send({ error: 'Erro ao atualizar cliente' });
  }
});

// Rota para deletar um cliente pelo ID
server.delete('/clients/:id', async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);

    if (!client) {
      return res.status(404).send({ error: 'Cliente não encontrado' });
    }

    res.status(200).send({ message: 'Cliente deletado com sucesso' });
  } catch (error) {
    res.status(500).send({ error: 'Erro ao deletar cliente' });
  }
});

// Rota para listar todos os clientes
server.get('/clients', async (req, res) => {
  try {
    const clients = await Client.find(); // Busca todos os clientes no MongoDB
    res.status(200).send(clients); // Retorna a lista de clientes
  } catch (error) {
    res.status(500).send({ error: 'Erro ao buscar clientes' });
  }
});

// Iniciar o servidor
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
