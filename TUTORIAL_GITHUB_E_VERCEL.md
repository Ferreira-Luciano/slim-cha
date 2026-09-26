# 🚀 Como Subir para o GitHub e Vercel (Configuração 100% Pronta sem Erro 404)

Sua página de vendas do **Slim Chá** e **IArmonize** está pronta e configurada para o Vercel:
- **Zero chaves de API necessárias.**
- **Zero banco de dados externo ou cadastros complexos.**
- **Correção automática do erro 404 da Vercel** incluída no arquivo `vercel.json` e `.npmrc`.
- Todos os botões levam **diretamente para o checkout de afiliados da Braip**.
- Totalmente **responsivo** (celular, tablet e computador).

---

## 🛠️ O Que Foi Ajustado Para Corrigir o Erro 404 na Vercel:

1. **`vercel.json` Completo**:
   - Definido `"framework": "vite"`.
   - Definido `"buildCommand": "npm run build"`.
   - Definido `"outputDirectory": "dist"` (o Vercel dava 404 quando tentava procurar na pasta raiz em vez da pasta `dist`).
   - Regra de roteamento SPA `rewrites` para entregar a página inicial em qualquer URL acessada.
2. **`package-lock.json` e `.npmrc`**:
   - Gerado o arquivo de bloqueio de dependências `package-lock.json`.
   - Criado `.npmrc` com `legacy-peer-deps=true` para garantir que o Vercel instale todos os pacotes sem nenhum conflito de versão.

---

## 📌 Como Atualizar no GitHub para a Vercel Fazer o Deploy Automático:

No seu terminal (dentro da pasta do projeto), rode estes 3 comandos:

```bash
git add .
git commit -m "fix: configuracao vercel.json e build dist sem erro 404"
git push
```

Assim que você der o `git push`, a Vercel vai detectar a atualização automaticamente, rodar o build e colocar o site no ar sem erro 404!

---

## ⚡ Caso Seja o Primeiro Deploy na Vercel:

1. Acesse [vercel.com](https://vercel.com/) e faça login com seu GitHub.
2. Clique em **"Add New..."** > **"Project"**.
3. Selecione o repositório e clique em **"Import"**.
4. Deixe todas as opções no padrão (o arquivo `vercel.json` já cuida de tudo automaticamente).
5. Clique no botão azul **"Deploy"**.

Pronto! Em menos de 1 minuto seu site estará no ar com HTTPS, link de afiliado funcionando e sem nenhum erro 404!
