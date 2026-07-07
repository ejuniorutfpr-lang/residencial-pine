// ══════════════════════════════════════════════
// assets/search-index.js — índice usado pela busca global (ícone de lupa no menu)
// Para adicionar algo novo à busca, só incluir um objeto no array abaixo.
// url pode ser uma âncora (#secao) ou outra página (ex: regimento.html#faq)
// ══════════════════════════════════════════════
window.SEARCH_INDEX = [
  // Sistemas
  { cat: "Sistema", title: "Porttari App", snippet: "Acessos, biometria, controle do portão e lista de convidados.", url: "index.html#sistemas" },
  { cat: "Sistema", title: "Informma Síndicos", snippet: "Abertura e acompanhamento de chamados de manutenção. Código PIN837 no 1º acesso.", url: "index.html#sistemas" },
  { cat: "Sistema", title: "CMPremium", snippet: "Administradora: reservas de espaços, mudanças, atas e documentos.", url: "index.html#sistemas" },
  { cat: "Sistema", title: "BV Garantia", snippet: "Boletos, 2ª via e negociação de débitos do condomínio.", url: "index.html#sistemas" },
  { cat: "Sistema", title: "Ultragaz", snippet: "Gás canalizado: consumo, faturas e emergência 24h.", url: "index.html#sistemas" },
  { cat: "Sistema", title: "Manuais e Plantas", snippet: "Manual do proprietário, plantas elétrica e hidráulica, garantias da construtora.", url: "index.html#sistemas" },
  { cat: "Sistema", title: "Internet e TV", snippet: "Operadoras disponíveis no condomínio: Nio, Vivo, Claro, Ligga, TIM.", url: "index.html#sistemas" },

  // Contatos
  { cat: "Contato", title: "Síndico", snippet: "Rui — Informma Síndicos. WhatsApp, telefone e e-mail do condomínio.", url: "index.html#contatos" },
  { cat: "Contato", title: "Portaria Remota", snippet: "Porttari — atendimento 24h, interfone (disque 94) e central 0800.", url: "index.html#contatos" },
  { cat: "Contato", title: "Limpeza e Zeladoria", snippet: "Supervisão da limpeza das áreas comuns e garagens.", url: "index.html#contatos" },
  { cat: "Contato", title: "Ultragaz — Emergência", snippet: "Emergência de gás 24h: 0800 886 1616.", url: "index.html#contatos" },

  // Áreas Comuns
  { cat: "Área Comum", title: "Academia", snippet: "24h, só moradores, silêncio das 22h às 8h, Wi-Fi disponível.", url: "index.html?area=ac-rules#areas" },
  { cat: "Área Comum", title: "Espaço Bar", snippet: "10h–22h, até 10 pessoas, reserva prévia obrigatória.", url: "index.html?area=eb-rules#areas" },
  { cat: "Área Comum", title: "Espaço Gourmet Maior", snippet: "10h–2h, até 15 pessoas, taxa R$ 162,10.", url: "index.html?area=gm-rules#areas" },
  { cat: "Área Comum", title: "Espaço Gourmet Menor", snippet: "10h–2h, até 8 pessoas, taxa R$ 162,10.", url: "index.html?area=gn-rules#areas" },
  { cat: "Área Comum", title: "Combo Espaço Gourmet", snippet: "Gourmet Maior + Menor combinados, até 23 pessoas.", url: "index.html?area=gc-rules#areas" },
  { cat: "Área Comum", title: "Rooftop 1 e 2", snippet: "10h–2h, último andar, taxa R$ 81,05 por rooftop.", url: "index.html?area=rf-rules#areas" },
  { cat: "Área Comum", title: "Mudança", snippet: "Seg–Sex 8h–17h, Sáb 8h–12h. Taxa isenta na 1ª ocupação.", url: "index.html?area=mu-rules#areas" },
  { cat: "Área Comum", title: "Espaço Pet", snippet: "8h–23h, uso livre, Pet Care (banho) gratuito.", url: "index.html?area=ep-rules#areas" },
  { cat: "Área Comum", title: "Brinquedoteca", snippet: "8h–22h, crianças até 10 anos com adulto.", url: "index.html?area=br-rules#areas" },

  // Orientações
  { cat: "Orientação", title: "Segurança Coletiva", snippet: "Acesso de veículos, o perigo do 'carona' no portão, prestadores.", url: "index.html#orientacoes" },
  { cat: "Orientação", title: "Manutenção da Unidade", snippet: "Ralos, gás, elétrica, filtros e revisão do aquecedor de passagem.", url: "index.html#orientacoes" },
  { cat: "Orientação", title: "Dicas de Convivência", snippet: "Silêncio, lixo, pets e comunicação entre vizinhos.", url: "index.html#orientacoes" },
  { cat: "Orientação", title: "Como agir em Emergências", snippet: "Vazamento de gás, incêndio e apoio da portaria.", url: "index.html#orientacoes" },

  // Transparência
  { cat: "Transparência", title: "Acompanhamento de Chamados", snippet: "Registre o protocolo do Informma para o Conselho acompanhar.", url: "transparencia.html#chamados" },
  { cat: "Transparência", title: "Conselho em Ação", snippet: "Atividades, análises e trabalhos em andamento do Conselho.", url: "transparencia.html#conselho" },

  // Regimento — por capítulo
  { cat: "Regimento", title: "Cap. I — Disposições Gerais", snippet: "Aplicação do regimento, deveres do síndico e do zelador.", url: "regimento.html?q=disposi%C3%A7%C3%B5es" },
  { cat: "Regimento", title: "Cap. II — Da Administração", snippet: "Síndico, Conselho Fiscal e Consultivo, mandatos e honorários.", url: "regimento.html?q=administra%C3%A7%C3%A3o" },
  { cat: "Regimento", title: "Cap. IV — Organização do Condomínio", snippet: "Cadastro de moradores, diário de ocorrências, locação.", url: "regimento.html?q=organiza%C3%A7%C3%A3o" },
  { cat: "Regimento", title: "Cap. V — Direitos e Deveres", snippet: "Direitos dos condôminos e deveres gerais de convivência.", url: "regimento.html?q=deveres" },
  { cat: "Regimento", title: "Cap. VI — Dos Animais", snippet: "Regras para posse e circulação de animais de estimação.", url: "regimento.html?q=animais" },
  { cat: "Regimento", title: "Garagem e Acessos", snippet: "Velocidade máxima, carregador elétrico, portões e portaria.", url: "regimento.html?q=garagem" },
  { cat: "Regimento", title: "Cap. XVII — Silêncio, Mudanças, Obras", snippet: "Horários de silêncio, agendamento de mudanças e obras.", url: "regimento.html?q=sil%C3%AAncio" },
  { cat: "Regimento", title: "Obras e Reformas", snippet: "Horários permitidos, ART/RRT obrigatório para obras complexas.", url: "regimento.html?q=obra" },
  { cat: "Regimento", title: "Cap. XIX — Quotas e Penalidades", snippet: "Vencimento, multas por atraso e infrações ao regimento.", url: "regimento.html?q=multa" },
  { cat: "Regimento", title: "Cap. XX — Sacadas e Gardens", snippet: "Regras para fechamento de sacadas, toldos e películas.", url: "regimento.html?q=sacada" },
  { cat: "Regimento", title: "Anexos — Tabela de Infrações", snippet: "Infrações leves, médias e graves e seus percentuais de multa.", url: "regimento.html?q=infra%C3%A7%C3%B5es" },

  // FAQ
  { cat: "Dúvida Frequente", title: "Horário de silêncio", snippet: "Restrição absoluta das 22h às 8h, com amparo no Código Civil.", url: "regimento.html#faq" },
  { cat: "Dúvida Frequente", title: "Posso fumar nas áreas comuns?", snippet: "Não. Proibido em salões, academia, halls, garagem e marquises.", url: "regimento.html#faq" },
  { cat: "Dúvida Frequente", title: "Posso ter animais de estimação?", snippet: "Sim, com guia, colo ou caixa nas áreas comuns.", url: "regimento.html#faq" },
  { cat: "Dúvida Frequente", title: "Quando posso fazer obras?", snippet: "Seg–Sex 8h–17h, Sáb 8h–12h. Obras complexas exigem ART/RRT.", url: "regimento.html#faq" },
  { cat: "Dúvida Frequente", title: "Quando posso fazer mudanças?", snippet: "Seg–Sex 8h–17h, Sáb 8h–12h, com 2 dias de antecedência.", url: "regimento.html#faq" },
  { cat: "Dúvida Frequente", title: "Vencimento e multa do boleto", snippet: "Vencimento dia 10, multa de 1% + juros de mora de 0,33% ao dia.", url: "regimento.html#faq" },
  { cat: "Dúvida Frequente", title: "Como reservo o salão ou gourmet?", snippet: "Pelo portal CMPremium, cancelamento com 48h de antecedência.", url: "regimento.html#faq" },
  { cat: "Dúvida Frequente", title: "Carregador de carro elétrico", snippet: "Permitido, desde que custeado pelo morador com medidor individual.", url: "regimento.html#faq" },
  { cat: "Dúvida Frequente", title: "Acesso de entregadores e prestadores", snippet: "Entregadores no portão; prestadores precisam de autorização prévia.", url: "regimento.html#faq" },
  { cat: "Dúvida Frequente", title: "Como registro uma ocorrência?", snippet: "Pelo app Informma Síndicos (PIN837) ou e-mail pine@informma.com.br.", url: "regimento.html#faq" }
];
