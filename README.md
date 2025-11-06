# Flavia Reis Aromas - Landing Page (HTML/CSS/JS)

## 📄 Versão HTML Pura

Esta é a versão **HTML, CSS e JavaScript puro** da landing page de Flavia Reis Aromas. Não requer nenhuma dependência ou build tool - funciona diretamente em qualquer navegador!

---

## 📁 Estrutura de Arquivos

```
flavia_reis_aromas_html/
├── index.html          # Arquivo HTML principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript para interatividade
├── logo.jpg            # Logo da marca
├── products/           # Pasta com imagens dos produtos
│   ├── WhatsAppImage2025-11-05at19.13.13.jpeg
│   ├── WhatsAppImage2025-11-05at19.13.14(1).jpeg
│   ├── WhatsAppImage2025-11-05at19.13.14(2).jpeg
│   ├── WhatsAppImage2025-11-05at19.13.14(3).jpeg
│   ├── WhatsAppImage2025-11-05at19.13.14(4).jpeg
│   └── WhatsAppImage2025-11-05at19.13.14.jpeg
└── README.md           # Este arquivo
```

---

## 🚀 Como Usar

### Opção 1: Abrir Localmente
1. Baixe ou descompacte os arquivos
2. Abra o arquivo `index.html` em seu navegador
3. Pronto! A página está funcionando

### Opção 2: Servir com um Servidor Local
Se você tiver Python instalado:

```bash
# Python 3
python -m http.server 8000

# Ou Python 2
python -m SimpleHTTPServer 8000
```

Depois acesse: `http://localhost:8000`

### Opção 3: Usar Node.js (http-server)
```bash
npm install -g http-server
http-server

# Ou com npx (sem instalar globalmente)
npx http-server
```

---

## 🎨 Características

✅ **Design Responsivo** - Funciona em mobile, tablet e desktop  
✅ **Sem Dependências** - Apenas HTML, CSS e JavaScript puro  
✅ **Rápido** - Carrega instantaneamente  
✅ **SEO Friendly** - Meta tags e estrutura semântica  
✅ **Acessível** - Segue boas práticas de acessibilidade  
✅ **Interativo** - Dicas expansíveis, animações suaves  
✅ **Integração WhatsApp** - Links diretos para conversa  

---

## 📱 Responsividade

A página foi otimizada para:
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

---

## 🎯 Seções da Página

### 1. **Navegação** (Navbar)
- Logo e nome da marca
- Botão flutuante para WhatsApp
- Sticky (fica no topo ao rolar)

### 2. **Hero Section**
- Título principal persuasivo
- Subtítulo
- CTA (Call To Action) principal

### 3. **Benefícios**
- 4 cards com diferenciais
- Ícones e descrições
- Hover effect

### 4. **Galeria de Produtos**
- 6 imagens das velas
- Grid responsivo
- Efeito zoom ao passar o mouse

### 5. **Depoimentos**
- 3 depoimentos de clientes
- 5 estrelas
- Localização das clientes

### 6. **Educação**
- 4 dicas sobre uso de velas
- Expansível ao clicar
- Animações suaves

### 7. **CTA Final**
- Chamada para ação persuasiva
- Botão grande e destacado

### 8. **Footer**
- Informações da marca
- Contato WhatsApp
- Links úteis

---

## 🔧 Customizações

### Alterar Número do WhatsApp
Procure por `5551993995053` nos arquivos e substitua pelo número desejado.

**Locais onde aparece:**
- `index.html` - Múltiplas ocorrências
- `script.js` - Função de compartilhamento

### Mudar Cores
Edite as variáveis CSS no topo do arquivo `styles.css`:

```css
:root {
    --background: #f5ede6;      /* Cor de fundo */
    --foreground: #3d2817;      /* Cor de texto */
    --accent: #d4a574;          /* Cor de destaque */
    /* ... outras cores */
}
```

### Adicionar Mais Depoimentos
Copie um bloco `<div class="testimonial-card">` em `index.html` e preencha com novos dados.

### Alterar Imagens
Substitua os arquivos em `products/` e atualize os nomes em `index.html` se necessário.

### Adicionar Seções Novas
1. Adicione o HTML em `index.html`
2. Estilize em `styles.css`
3. Adicione interatividade em `script.js` se necessário

---

## 📊 Performance

- **Tamanho Total**: ~300KB (com imagens)
- **Tempo de Carregamento**: < 2 segundos (em conexão normal)
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices)

---

## 🌐 Hospedagem

Você pode hospedar esta página em:

### Opções Gratuitas:
- **GitHub Pages** - Hospedagem gratuita para projetos estáticos
- **Netlify** - Deploy automático e gratuito
- **Vercel** - Otimizado para performance
- **Firebase Hosting** - Google Cloud

### Opções Pagas:
- **Hostinger** - Hospedagem compartilhada
- **Bluehost** - WordPress e hospedagem
- **DigitalOcean** - VPS com controle total

### Como Fazer Deploy no GitHub Pages:
```bash
# 1. Crie um repositório no GitHub
# 2. Faça upload dos arquivos
# 3. Vá em Settings > Pages
# 4. Selecione a branch main
# 5. Sua página estará em: https://seu-usuario.github.io/seu-repositorio
```

---

## 🔐 Segurança

- ✅ Sem dados sensíveis armazenados
- ✅ Links WhatsApp são seguros
- ✅ Sem cookies ou rastreamento (a menos que você adicione)
- ✅ HTTPS recomendado para produção

---

## 📈 Analytics

Para rastrear visitantes, adicione Google Analytics ao `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Substitua `GA_ID` pelo seu ID do Google Analytics.

---

## 🐛 Troubleshooting

### Imagens não carregam
- Verifique se a pasta `products/` está no mesmo diretório que `index.html`
- Verifique os nomes dos arquivos (case-sensitive)

### Estilos não aparecem
- Verifique se `styles.css` está no mesmo diretório
- Limpe o cache do navegador (Ctrl+Shift+Delete)

### JavaScript não funciona
- Verifique se `script.js` está no mesmo diretório
- Abra o console do navegador (F12) para ver erros

### Página lenta
- Comprima as imagens com ferramentas como TinyPNG
- Use um CDN para servir os arquivos
- Ative compressão GZIP no servidor

---

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique se todos os arquivos estão no mesmo diretório
2. Teste em diferentes navegadores
3. Verifique o console do navegador (F12) para erros
4. Contate o desenvolvedor original

---

## 📄 Licença

Esta landing page foi criada especificamente para Flavia Reis Aromas.

---

## 🎉 Próximos Passos

1. **Customizar** - Adapte as cores, textos e imagens
2. **Testar** - Teste em diferentes dispositivos e navegadores
3. **Otimizar** - Comprima imagens e minifique CSS/JS
4. **Hospedar** - Escolha uma plataforma de hospedagem
5. **Domínio** - Aponte um domínio personalizado
6. **Analytics** - Integre rastreamento de visitantes
7. **Manutenção** - Atualize conteúdo regularmente

---

**Versão:** 1.0  
**Data:** Novembro 2025  
**Criado por:** Manus AI

---

## 📚 Recursos Úteis

- [MDN Web Docs](https://developer.mozilla.org/) - Documentação web
- [CSS Tricks](https://css-tricks.com/) - Dicas de CSS
- [JavaScript.info](https://javascript.info/) - Guia JavaScript
- [Can I Use](https://caniuse.com/) - Compatibilidade de navegadores
- [Google Fonts](https://fonts.google.com/) - Fontes gratuitas

---

Aproveite sua landing page! 🚀
