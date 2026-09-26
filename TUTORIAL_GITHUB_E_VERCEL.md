# 🚀 Como Subir para o GitHub e Vercel (Super Simples e Sem Chaves de API)

Sua página de vendas do **Slim Chá** e **IArmonize** foi simplificada ao máximo:
- **Zero chaves de API necessárias.**
- **Zero banco de dados externo ou cadastros complexos.**
- Todos os botões levam **diretamente para o checkout de afiliados da Braip**.
- Totalmente **responsivo** (celular, tablet e computador).
- O site sobe e funciona **do jeito que está**, pronto para vender!

---

## 📌 Passo 1: Subir para o GitHub

1. Acesse [github.com](https://github.com/) e crie um novo repositório (ex: `slimcha-oficial`).
2. No seu terminal (dentro da pasta do projeto), rode estes comandos:

```bash
# Iniciar o git (caso ainda não tenha iniciado)
git init

# Adicionar todos os arquivos
git add .

# Criar o commit
git commit -m "feat: pagina de vendas oficial com checkout braip"

# Definir branch principal
git branch -M main

# Conectar com seu repositorio do GitHub (troque pelo link do seu repo)
git remote add origin https://github.com/SEU_USUARIO/slimcha-oficial.git

# Enviar os arquivos
git push -u origin main
```

---

## ⚡ Passo 2: Publicar na Vercel (Em 1 Minuto)

1. Acesse [vercel.com](https://vercel.com/) e faça login com seu GitHub.
2. Clique em **"Add New..."** > **"Project"**.
3. Selecione o repositório que você acabou de subir no GitHub e clique em **"Import"**.
4. Não precisa alterar nenhuma configuração e nem adicionar variáveis de ambiente!
5. Clique diretamente no botão azul **"Deploy"**.

**Pronto!** A Vercel vai gerar um link seguro (com HTTPS e SSL gratuito) e sua página de vendas estará no ar funcionando perfeitamente!

---

## 🔗 Como Funciona o Link de Afiliado

- Ao clicar em qualquer kit, o cliente é redirecionado instantaneamente para a página de pagamento oficial da Braip.
- Se você tiver parâmetros de rastreamento de anúncios (como `?utm_source=instagram` ou `?src=facebook`), o site mantém essas tags automaticamente no link do checkout para você não perder nenhuma comissão.
- Para alterar o link de afiliado, basta abrir o ícone de engrenagem no topo do próprio site e salvar seu novo link!
