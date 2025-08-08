# Victor Vinicius – Site de Advocacia

## Como rodar (bem mastigado)
1) Instale o Node.js LTS: https://nodejs.org/en (reinicie o terminal depois).
2) Abra o terminal e rode:
```
cd victor-adv-site
npm install
npm run dev
```
3) Abra http://localhost:3000 no navegador.

## Deploy na Vercel (2 minutos)
1) Crie uma conta em https://vercel.com com seu Gmail.
2) No painel, clique **Add New -> Project -> Import** do seu GitHub.
3) Envie esta pasta para um **repositório do GitHub** (ou use "Import Third-Party... Upload").
4) A Vercel detecta **Next.js** automaticamente. Clique **Deploy**.
5) Você ganha um link temporário do tipo `https://...vercel.app`.

## Domínio victorvinicius.adv.br
1) Acesse https://registro.br, registre o domínio `victorvinicius.adv.br`.
2) Na Vercel: **Settings -> Domains -> Add** `victorvinicius.adv.br`.
3) Escolha **Use Vercel Nameservers**. Vai aparecer 4 servidores (ns1 a ns4).
4) No Registro.br: **DNS -> Alterar Servidores DNS** -> cole os 4 nameservers da Vercel.
5) Aguarde propagação (até 2h). Pronto.

## E-mail profissional (Zoho Mail – grátis para 1 usuário)
1) Crie conta em https://www.zoho.com/mail/ (Mail Free - Custom Domain).
2) Adicione o domínio `victorvinicius.adv.br` e crie o usuário `contato`.
3) No Registro.br (ou na Vercel DNS se usar nameservers da Vercel), crie os registros MX:
   - `@  MX  10  mx.zoho.com`
   - `@  MX  20  mx2.zoho.com`
   - `@  MX  50  mx3.zoho.com`
4) SPF (TXT):
   - `@  TXT  v=spf1 include:zoho.com ~all`
5) Ative o DKIM dentro do Zoho (ele te dá um **TXT** para você adicionar).
6) Depois, no Gmail: **Configurações -> Contas e importação -> Enviar e-mail como** ->
   - Adicione `contato@victorvinicius.adv.br` usando SMTP da Zoho:
     - Servidor: `smtp.zoho.com` | Porta 465 (SSL) | Usuário: contato@victorvinicius.adv.br

Pronto: você recebe no Zoho e envia pelo Gmail com seu domínio.

## Onde trocar textos/cores
Abra `pages/index.tsx` e edite o objeto `BRAND` (nome, e-mail, slogan, cores) e as seções.

---
Qualquer dúvida, me chame. 🚀
