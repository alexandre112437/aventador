// Rolagem suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
link.addEventListener('click', function (e) {
e.preventDefault();
const alvo = document.querySelector(this.getAttribute('href'));
if (alvo) {
alvo.scrollIntoView({ behavior: 'smooth' });
}
});
});
// Mensagem de confirmação no envio do formulário
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
e.preventDefault(); // evita recarregar a página
alert('Obrigado por entrar em contato! Em breve responderemos.');
form.reset(); // limpa os campos
});