const Footer = () => {
    return (
        <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center ">
            <h1 className="text-2xl font-bold">Aquisito Nomas</h1>
            <div className="flex gap-9">
                <a href="#inicio">Ir a Inicio</a>
                <a href="#acercade">Acerca de Nosotros</a>
                <a href="#project">Métodos de pago</a>
            </div>
            <div className="flex items-center gap-3">
                <a href="https://www.linkedin.com/in/daniel-quiguango-delgado-53b52a262/" target="_blank">
                    <i className="ri-linkedin-fill ri-2x"></i>
                </a>
                <a href="https://wa.me/+593959463688" target="_blank">
                    <i className="ri-whatsapp-fill ri-2x"></i>
                </a>
                <a href="https://www.tiktok.com/@freepassec?_t=ZM-90uFBTgNDxo&_r=1" target="_blank">
                    <i className="ri-tiktok-fill ri-2x"></i>
                </a>
            </div>
        </div>
    );
};


export default Footer;