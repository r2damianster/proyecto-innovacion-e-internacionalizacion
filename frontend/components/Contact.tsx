export default function Contact() {
  const teamContacts = [
    {
      name: 'Arturo Rodríguez',
      role: 'Líder del Proyecto',
      email: 'arturo.rodriguez@uleam.edu.ec',
      orcid: '0000-0000-0000-0000',
    },
    {
      name: 'Jhonny Villafuerte',
      role: 'Colíder del Proyecto',
      email: 'jhonny.villafuerte@uleam.edu.ec',
      orcid: '0000-0000-0000-0000',
    },
  ];

  const socialLinks = [
    {
      name: 'ULEAM Facebook',
      url: 'https://www.facebook.com/uleam.edu.ec',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'ULEAM Twitter',
      url: 'https://twitter.com/uleam',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'ULEAM Instagram',
      url: 'https://www.instagram.com/uleam.edu.ec',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'ULEAM YouTube',
      url: 'https://www.youtube.com/@uleam',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: 'ULEAM Website',
      url: 'https://www.uleam.edu.ec',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-uleam-blue mb-4">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-uleam-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ¿Tienes preguntas o quieres colaborar? ¡Contáctanos!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Team Contacts */}
          <div>
            <h3 className="text-2xl font-bold text-uleam-blue mb-6">
              Equipo de Contacto
            </h3>
            <div className="space-y-4">
              {teamContacts.map((contact, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all"
                >
                  <h4 className="text-lg font-bold text-uleam-blue mb-2">
                    {contact.name}
                  </h4>
                  <p className="text-gray-600 mb-3">{contact.role}</p>
                  <div className="space-y-2 text-sm">
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {contact.email}
                    </a>
                    {contact.orcid && (
                      <div className="flex items-center gap-2 text-gray-500">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-1.913-1.237-3.722-3.984-3.722h-2.335z" />
                        </svg>
                        <a
                          href={`https://orcid.org/${contact.orcid}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-uleam-blue transition"
                        >
                          {contact.orcid}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links & Info */}
          <div>
            <h3 className="text-2xl font-bold text-uleam-blue mb-6">
              Redes Sociales y Enlaces
            </h3>
            
            {/* Social Links */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-uleam-blue mb-4">Síguenos</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-uleam-blue"
                    title={social.name}
                  >
                    {social.icon}
                    <span className="text-sm font-medium hidden sm:inline">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Institution Info */}
            <div className="bg-gradient-to-br from-uleam-blue to-primary-800 text-white rounded-lg p-6">
              <h4 className="text-lg font-bold mb-3">Universidad Laica Eloy Alfaro de Manabí</h4>
              <p className="text-gray-200 text-sm mb-4">
                Comprometida con la excelencia académica, la investigación y la transformación social.
              </p>
              <a
                href="https://www.uleam.edu.ec"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-uleam-gold text-uleam-blue font-bold rounded-lg hover:bg-yellow-400 transition"
              >
                Visitar sitio web
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Quick Contact Form */}
            <div className="mt-6 bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-uleam-blue mb-4">Envíanos un mensaje</h4>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-uleam-blue focus:ring-2 focus:ring-uleam-blue/20 outline-none transition"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-uleam-blue focus:ring-2 focus:ring-uleam-blue/20 outline-none transition"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tu mensaje"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-uleam-blue focus:ring-2 focus:ring-uleam-blue/20 outline-none transition resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-uleam-blue text-white font-bold rounded-lg hover:bg-uleam-blue/90 transition-all transform hover:scale-105"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
