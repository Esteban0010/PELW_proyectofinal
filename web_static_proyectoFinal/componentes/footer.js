const footer = {
    contacto: "MoonTravel@gmail.com",
    direccion: "Neuquen, Neuquen, Argentina.",
    nosotros: "Nosotros",
    derechos: "Derechos reservados",
    facebook: {
        nombre: "Facebook",
        facebooklink: "https://www.facebook.com"
    },
    instagram: {
        nombre: "Instagram",
        instagramLink: "https://www.instagram.com"
    },
    twitter: {
        nombre: "Twitter",
        twitterLink: "https://www.twitter.com"
    },
    terminos: "Términos y condiciones",
};

const contenedorFooter = document.getElementById('wrapper_footer');
const footerE = document.createElement('div');

const contenido = `
    <div class="footer">
    <div class="contacto">
    <h3>${footer.contacto}</h1>
    <p>${footer.direccion}</p>
</div>
<div class="redes-sociales">
    <a href="${footer.facebook.facebooklink}">${footer.facebook.nombre}</a>
    <a href="${footer.instagram.instagramLink}">${footer.instagram.nombre}</a>
    <a href="${footer.twitter.twitterLink}">${footer.twitter.nombre}</a>
</div>
<p>${footer.derechos} &copy; ${new Date().getFullYear()}</p>
<p><a href="#">${footer.terminos}</a></p>
</div>
`;

contenedorFooter.innerHTML= contenido;


