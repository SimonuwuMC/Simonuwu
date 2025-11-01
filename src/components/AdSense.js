import React from 'react';
import { Helmet } from 'react-helmet-async';

const AdSense = () => {
  return (
    <Helmet>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5545830368282113"
        crossOrigin="anonymous"
      />
    </Helmet>
  );
};

export default AdSense;