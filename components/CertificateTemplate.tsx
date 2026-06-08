import type { CertificateData } from '@/types';

const ENTITY_LABELS: Record<CertificateData['entity'], string> = {
  carrera: 'Carrera de Pedagogía de los Idiomas Nacionales y Extranjeros (PINE)',
  proyecto: 'Proyecto de Innovaciones Pedagógicas e Internacionalización',
  grupo_investigacion:
    'Grupo de Investigación: Innovaciones pedagógicas para el desarrollo sostenible: inclusión, interculturalidad e interdisciplinaridad',
};

function bodyText(data: CertificateData): { intro: string; showMotive: boolean } {
  switch (data.type) {
    case 'participacion':
      return {
        intro: `Por su participación destacada en ${data.eventName || 'el evento'}, con la ponencia titulada:`,
        showMotive: true,
      };
    case 'expositor':
      return {
        intro: `Por su destacada participación como expositor(a) en ${data.eventName || 'el evento'}, presentando:`,
        showMotive: true,
      };
    case 'reconocimiento':
      return {
        intro: `En reconocimiento a ${data.motiveText || 'su valioso aporte y compromiso'}${data.eventName ? ` en ${data.eventName}` : ''}.`,
        showMotive: false,
      };
  }
}

export default function CertificateTemplate({ data }: { data: CertificateData }) {
  const { intro, showMotive } = bodyText(data);

  return (
    <div
      id="certificate-render"
      className="relative bg-white"
      style={{ width: 1200, height: 850, fontFamily: 'Georgia, serif' }}
    >
      {/* Borde institucional */}
      <div className="absolute inset-0 border-[14px]" style={{ borderColor: '#003366' }} />
      <div className="absolute inset-[22px] border-[3px]" style={{ borderColor: '#FFD700' }} />

      <div className="absolute inset-[50px] flex flex-col items-center text-center px-16">
        <img src="/images/logo-proyecto.png" alt="Logo PINE" style={{ height: 70 }} className="mb-3" />

        <h1 className="text-4xl tracking-[0.3em] font-bold" style={{ color: '#003366' }}>
          CERTIFICADO
        </h1>
        <p className="mt-2 text-sm" style={{ color: '#003366' }}>
          Facultad de Educación, Turismo, Artes y Humanidades de la Universidad Laica Eloy Alfaro de Manabí
        </p>
        <p className="text-sm font-semibold" style={{ color: '#003366' }}>
          {ENTITY_LABELS[data.entity]}
        </p>

        <p className="mt-8 text-base" style={{ color: '#1a1a1a' }}>
          Otorgado a
        </p>
        <p className="mt-1 text-3xl font-bold" style={{ color: '#FFD700', textShadow: '0 1px 0 #003366' }}>
          {data.recipientName || 'Nombre del participante'}
        </p>

        <p className="mt-6 text-base leading-relaxed max-w-3xl" style={{ color: '#1a1a1a' }}>
          {intro}
        </p>
        {showMotive && (
          <p className="mt-2 text-base italic font-semibold max-w-3xl" style={{ color: '#003366' }}>
            &ldquo;{data.motiveText || 'Título de la ponencia'}&rdquo;
          </p>
        )}

        <p className="mt-6 text-sm" style={{ color: '#1a1a1a' }}>
          {data.place || 'Manta'}, {data.date || 'fecha'}
        </p>

        <div className="mt-auto flex w-full justify-center gap-16 pt-10">
          {data.signers.map((signer, i) => (
            <div key={i} className="flex flex-col items-center" style={{ minWidth: 220 }}>
              <div className="w-full border-t pt-2" style={{ borderColor: '#003366' }}>
                <p className="text-sm font-semibold" style={{ color: '#003366' }}>
                  {signer.name || 'Nombre del firmante'}
                </p>
                <p className="text-xs" style={{ color: '#1a1a1a' }}>
                  {signer.role || 'Cargo'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
