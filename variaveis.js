// ─────────────────────────────────────────────────────────────────────
//  CONFIGURAÇÕES DO CATÁLOGO — VALORES PADRÃO
//
//  O jeito recomendado de configurar é pelo GitHub, sem editar código:
//  Settings → Secrets and variables → Actions → aba Variables.
//  Nomes: WHATSAPP, NOME_LOJA, MENSAGEM_WHATSAPP, REPOSITORIO, BRANCH.
//  Na publicação, cada variável preenchida lá substitui o valor abaixo.
//  Depois de alterar, vá em Actions → "Publicar catálogo" → Run workflow.
//
//  Usuário e senha do admin NÃO ficam aqui: eles são criados no
//  primeiro acesso a admin.html (este arquivo é público).
// ─────────────────────────────────────────────────────────────────────

var CONFIG = {

  // Número do WhatsApp que recebe os pedidos.
  // Só números: 55 + DDD + número. Exemplo: '5531999998888'
  whatsapp: '5531972496651',

  // Nome que aparece no topo do catálogo e na aba do navegador.
  nomeLoja: 'Catálogo de Produtos',

  // Mensagem que o cliente envia ao tocar em "Pedir pelo WhatsApp".
  // {descricao}, {id} e {preco} são trocados pelos dados do produto.
  mensagemWhatsapp: 'Olá! Tenho interesse no chinelo *{descricao}* (ID: {id}) por R$ {preco}.',

  // Repositório do GitHub no formato 'usuario/repositorio'.
  // Deixe vazio ('') para o admin descobrir sozinho pelo endereço do site.
  // Só é preciso preencher se o site usar domínio próprio.
  repositorio: '',

  // Branch publicada no GitHub Pages. Quase sempre é 'main'.
  branch: 'main'

};
