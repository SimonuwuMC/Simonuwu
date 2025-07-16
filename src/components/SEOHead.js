import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "Simonuwu Fabric Project - Modpack Optimizado para Minecraft",
  description = "Descarga el modpack más optimizado para Minecraft Fabric. Compatible con versiones 1.18.2 a 1.21.7. Incluye Sodium, Lithium, Iris Shaders y más mods kawaii.",
  keywords = "minecraft, modpack, fabric, simonuwu, sodium, lithium, iris, shaders, optimizado, kawaii, mods",
  image = "https://cdn.modrinth.com/data/UqAIdvco/c4ba77ab2ed7f5662a619caed9b47c8391c41658_96.webp",
  url = "https://simonuwumodpack.netlify.app/"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEOHead;