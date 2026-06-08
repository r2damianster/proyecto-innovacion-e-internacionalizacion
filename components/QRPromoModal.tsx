'use client';

import { useEffect, useState } from 'react';
import QRModal from './QRModal';

const SESSION_KEY = 'qr_promo_seen';

export default function QRPromoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_KEY)) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem(SESSION_KEY, '1');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return <QRModal onClose={handleClose} />;
}
