document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Form to WhatsApp functionality
    const contactForm = document.getElementById('contactForm');
    const phoneNumber = '5522992614107'; // Número de telefone atualizado

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const servico = document.getElementById('servico').value;
        const mensagem = document.getElementById('mensagem').value;
        
        let fullMessage = `Olá, Beto Auto Mecânica!\n\n`;
        fullMessage += `Meu nome é *${nome}*.\n`;
        fullMessage += `Meu telefone é *${telefone}*.\n`;

        if (servico && servico !== 'Selecione o Serviço Desejado') {
            fullMessage += `O assunto que gostaria de tratar é: *${servico}*.\n`;
        }

        if (mensagem) {
            fullMessage += `\n*Mensagem Adicional:*\n${mensagem}`;
        }
        
        fullMessage += `\n\n_Origem: Formulário do Site Oficial_`;

        const encodedMessage = encodeURIComponent(fullMessage);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
    });

    // Correção: Funcionalidade do botão flutuante do WhatsApp
    const whatsappFloat = document.getElementById('whatsappFloat');

    whatsappFloat.addEventListener('click', (e) => {
        e.preventDefault(); // Impede o comportamento padrão de link

        const defaultMessage = `Olá, Beto Auto Mecânica! Vi o site de vocês e gostaria de mais informações.`;
        const encodedMessage = encodeURIComponent(defaultMessage);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
    });
});