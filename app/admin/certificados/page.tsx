'use client';

import { useRef, useState } from 'react';
import { Packer } from 'docx';
import CertificateTemplate from '@/components/CertificateTemplate';
import { buildCertificateDocument } from '@/lib/certificateDocx';
import type {
  CertificateData,
  CertificateEntity,
  CertificateLogo,
  CertificateSigner,
  CertificateType,
} from '@/types';

const TYPE_OPTIONS: { value: CertificateType; label: string }[] = [
  { value: 'participacion', label: 'Participación en jornada/evento' },
  { value: 'expositor', label: 'Participación como expositor(a)' },
  { value: 'reconocimiento', label: 'Reconocimiento' },
];

const ENTITY_OPTIONS: { value: CertificateEntity; label: string }[] = [
  { value: 'proyecto', label: 'Proyecto de Innovaciones Pedagógicas e Internacionalización' },
  { value: 'grupo_investigacion', label: 'Grupo de Investigación' },
  { value: 'carrera', label: 'Carrera de Pedagogía de los Idiomas (PINE)' },
];

const LOGO_OPTIONS: { value: CertificateLogo; label: string }[] = [
  { value: 'proyecto', label: 'Logo del Proyecto PINE' },
  { value: 'grupo_investigacion', label: 'Logo del Grupo de Investigación' },
  { value: 'red_lea', label: 'Logo Red LEA' },
  { value: 'ninguno', label: 'Sin logo adicional (solo ULEAM)' },
];

const todayISO = () => new Date().toISOString().split('T')[0];

const formatDate = (iso: string) => {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('es-EC', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

const emptySigner = (): CertificateSigner => ({ name: '', role: '' });

const sanitizeFileName = (name: string) => name.trim().replace(/\s+/g, '-').replace(/[^\w\-]/g, '') || 'participante';

export default function AdminCertificatesPage() {
  const [data, setData] = useState<CertificateData>({
    type: 'participacion',
    entity: 'proyecto',
    secondaryLogo: 'proyecto',
    recipientName: '',
    motiveText: '',
    eventName: '',
    date: todayISO(),
    place: 'Manta',
    signers: [emptySigner(), emptySigner()],
  });
  const [recipientsText, setRecipientsText] = useState('');
  const [exporting, setExporting] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const update = <K extends keyof CertificateData>(key: K, value: CertificateData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const updateSigner = (index: number, field: keyof CertificateSigner, value: string) => {
    setData((prev) => ({
      ...prev,
      signers: prev.signers.map((s, i) => (i === index ? { ...s, [field]: value } : s)),
    }));
  };

  const addSigner = () => {
    if (data.signers.length >= 3) return;
    setData((prev) => ({ ...prev, signers: [...prev.signers, emptySigner()] }));
  };

  const removeSigner = (index: number) => {
    if (data.signers.length <= 2) return;
    setData((prev) => ({ ...prev, signers: prev.signers.filter((_, i) => i !== index) }));
  };

  const recipients = recipientsText
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  const handleDownload = async () => {
    const names = recipients.length > 0 ? recipients : [data.recipientName.trim()];
    if (!names[0]) {
      alert('Ingresa al menos el nombre de un destinatario');
      return;
    }

    setExporting(true);
    try {
      const exportData: CertificateData = { ...data, date: formatDate(data.date) };

      if (names.length === 1) {
        const doc = await buildCertificateDocument(exportData, names[0]);
        const blob = await Packer.toBlob(doc);
        downloadBlob(blob, `Certificado-${sanitizeFileName(names[0])}.docx`);
      } else {
        const { default: JSZip } = await import('jszip');
        const zip = new JSZip();
        for (const name of names) {
          const doc = await buildCertificateDocument(exportData, name);
          const blob = await Packer.toBlob(doc);
          zip.file(`Certificado-${sanitizeFileName(name)}.docx`, blob);
        }
        const zipBlob = await zip.generateAsync({ type: 'blob' });
        downloadBlob(zipBlob, 'Certificados.zip');
      }
    } catch (error) {
      console.error('Error generando certificado:', error);
      alert('Error al generar el certificado');
    } finally {
      setExporting(false);
    }
  };

  const downloadBlob = (blob: Blob, fileName: string) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  };

  const previewName = recipients[0] || data.recipientName;
  const previewData: CertificateData = { ...data, recipientName: previewName, date: formatDate(data.date) };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-uleam-blue">Generador de Certificados</h1>
        <p className="text-gray-600 text-sm mt-1">
          Completa los datos y descarga el certificado en Word (.docx), listo para imprimir, firmar o enviar por correo.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Formulario */}
        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de certificado</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={data.type}
                onChange={(e) => update('type', e.target.value as CertificateType)}
              >
                {TYPE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Otorgado por</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={data.entity}
                onChange={(e) => update('entity', e.target.value as CertificateEntity)}
              >
                {ENTITY_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Logo adicional (junto al de ULEAM)</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={data.secondaryLogo}
              onChange={(e) => update('secondaryLogo', e.target.value as CertificateLogo)}
            >
              {LOGO_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Destinatario(s)
              <span className="font-normal text-gray-400"> — uno por línea para generar varios certificados a la vez</span>
            </label>
            <textarea
              className="w-full border rounded px-3 py-2"
              rows={3}
              value={recipientsText}
              onChange={(e) => setRecipientsText(e.target.value)}
              placeholder={'Nombre completo del participante\nOtro nombre completo\n...'}
            />
            {recipients.length > 1 && (
              <p className="text-xs text-gray-500 mt-1">
                Se generarán {recipients.length} certificados (uno por nombre) y se descargarán juntos en un .zip
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del evento</label>
            <input
              className="w-full border rounded px-3 py-2"
              value={data.eventName}
              onChange={(e) => update('eventName', e.target.value)}
              placeholder='Ej. "Jornadas de Investigación, Innovaciones y Desarrollo 2026"'
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {data.type === 'reconocimiento' ? 'Motivo del reconocimiento' : 'Título de la ponencia'}
            </label>
            <textarea
              className="w-full border rounded px-3 py-2"
              rows={2}
              value={data.motiveText}
              onChange={(e) => update('motiveText', e.target.value)}
              placeholder={
                data.type === 'reconocimiento'
                  ? 'Ej. su destacada trayectoria y aporte a la investigación educativa'
                  : 'Ej. Actividad física como estrategia para estimular...'
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lugar</label>
              <input
                className="w-full border rounded px-3 py-2"
                value={data.place}
                onChange={(e) => update('place', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Fecha</label>
              <input
                type="date"
                className="w-full border rounded px-3 py-2"
                value={data.date}
                onChange={(e) => update('date', e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">Firmantes (2 a 3)</label>
              {data.signers.length < 3 && (
                <button
                  type="button"
                  onClick={addSigner}
                  className="text-sm text-uleam-blue hover:underline"
                >
                  + Agregar firmante
                </button>
              )}
            </div>
            <div className="space-y-3">
              {data.signers.map((signer, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <input
                    className="flex-1 border rounded px-3 py-2"
                    placeholder="Nombre y título (ej. Lic. Verónica Chávez, Mg.)"
                    value={signer.name}
                    onChange={(e) => updateSigner(i, 'name', e.target.value)}
                  />
                  <input
                    className="flex-1 border rounded px-3 py-2"
                    placeholder="Cargo (ej. Directora de Carrera PINE)"
                    value={signer.role}
                    onChange={(e) => updateSigner(i, 'role', e.target.value)}
                  />
                  {data.signers.length > 2 && (
                    <button
                      type="button"
                      onClick={() => removeSigner(i)}
                      className="text-red-500 hover:text-red-700 px-2"
                      title="Quitar firmante"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleDownload}
            disabled={exporting}
            className="w-full bg-uleam-blue text-white rounded px-4 py-3 font-semibold hover:bg-uleam-blue/90 disabled:opacity-50"
          >
            {exporting
              ? 'Generando...'
              : recipients.length > 1
                ? `Descargar ${recipients.length} certificados (.zip)`
                : 'Descargar certificado (Word)'}
          </button>
        </div>

        {/* Vista previa */}
        <div className="bg-gray-100 rounded-lg shadow p-6 overflow-auto">
          <p className="text-sm text-gray-500 mb-3">
            Vista previa{recipients.length > 1 ? ` (1.º de ${recipients.length} destinatarios)` : ''}:
          </p>
          <div className="origin-top-left" style={{ transform: 'scale(0.55)', width: 550, height: 'auto' }}>
            <div ref={previewRef}>
              <CertificateTemplate data={previewData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
