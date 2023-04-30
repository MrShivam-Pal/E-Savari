import { useRef, useState } from 'react';
import QrReader  from 'react-qr-reader';

function Qrscan() {
  const qrReaderRef = useRef(null);
  const [qrCodeData, setQrCodeData] = useState(null);
  const [error, setError] = useState(null);

  const handleScan = (data) => {
    if(data){
        setQrCodeData(data);
    }

  };

  const handleError = (error) => {
    setError(error);
  };

  const startScan = () => {
    qrReaderRef.current?.openImageDialog();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>QR Code Scanner</h1>
      <div style={{ width: '100%', maxWidth: '500px', marginBottom: '20px' }}>
        <QrReader
          ref={qrReaderRef}
          delay={300}
          onError={handleError}
          onScan={handleScan}
          facingMode={"environment"}
        />
      </div>
      {/* <button onClick={startScan} style={{ padding: '10px', fontSize: '18px' }}>
        Start Scan
      </button> */}
      <div style={{ marginTop: '20px' }}>
        {qrCodeData ? <p>QR Code Data: {qrCodeData}</p> : null}
        {error ? <p>Error: {error.message}</p> : null}
      </div>
    </div>
  );
}

export default Qrscan;
