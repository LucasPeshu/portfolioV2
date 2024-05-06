function GoogleMaps() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div style={{ position: 'relative', paddingBottom: '75%', height: 0 }}>
        <iframe
          className="rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53888.014097379055!2d-63.2804195373146!3d-32.41913449073501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cc42fb51306dc1%3A0xbfb3fffbd425c6b1!2zVmlsbGEgTWFyw61hLCBDw7NyZG9iYQ!5e0!3m2!1ses!2sar!4v1714756753945!5m2!1ses!2sar"
          style={{ position: 'absolute', top: 0, left: 0, border: 0, width: '100%', height: '100%' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default GoogleMaps;
