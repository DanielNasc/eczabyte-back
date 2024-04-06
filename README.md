# Backend Twitter

### 🚀 Como preparar o projeto para desenvolver

Esteja seguro de ter o docker instalado antes de prosseguir com os passos. Segue o manual de instalação para o Ubuntu [aqui](https://docs.docker.com/engine/install/ubuntu/).

```bash
  git clone https://github.com/DanielNasc/eczabyte-back.git y-api
  cd y-api
  docker compose up -d
  npm install
  npx prisma migrate dev --name init
  npm run start:dev
```
