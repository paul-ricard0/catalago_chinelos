// ─────────────────────────────────────────────────────────────────────
//  CONFIGURAÇÕES DO CATÁLOGO
//
//  Troque só o que está entre aspas e salve o arquivo.
//  Não apague as aspas ('), as vírgulas (,) nem as chaves ({ }).
//
//  Usuário e senha do admin NÃO ficam aqui: eles são criados no
//  primeiro acesso a admin.html (este arquivo é público).
// ─────────────────────────────────────────────────────────────────────

var CONFIG = {

  // Número do WhatsApp que recebe os pedidos.
  // Só números: 55 + DDD + número. Exemplo: '5531999998888'
  whatsapp: '5531983055118',

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
