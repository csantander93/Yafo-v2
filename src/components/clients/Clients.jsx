import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// ── Logos de clientes ─────────────────────────────────────────────────────────
import balanz        from '../../assets/img-clients/balanz.webp';
import bancor        from '../../assets/img-clients/bancor.webp';
import bcobacs       from '../../assets/img-clients/bcobacs.webp';
import bcobica       from '../../assets/img-clients/bcobica.webp';
import bcocoinag     from '../../assets/img-clients/bcocoinag.webp';
import bcocolumbia   from '../../assets/img-clients/bcocolumbia.webp';
import bcocomafi     from '../../assets/img-clients/bcocomafi.webp';
import bcocorp       from '../../assets/img-clients/bcocorp.webp';
import bcocorrientes from '../../assets/img-clients/bcocorrientes.webp';
import bcodelsol     from '../../assets/img-clients/bcodelsol.webp';
import bcodino       from '../../assets/img-clients/bcodino.webp';
import bcoentrerios  from '../../assets/img-clients/bcoentrerios.webp';
import bcojulio      from '../../assets/img-clients/bcojulio.webp';
import bcoficohsa    from '../../assets/img-clients/bcoficohsa.webp';
import bcogalicia    from '../../assets/img-clients/bcogalicia.webp';
import bcohipotecario from '../../assets/img-clients/bcohipotecario.webp';
import bcoicbc       from '../../assets/img-clients/bcoicbc.webp';
import bcoind        from '../../assets/img-clients/bcoind.webp';
import bcomacro      from '../../assets/img-clients/bcomacro.webp';
import bcomariva     from '../../assets/img-clients/bcomariva.webp';
import bcomeridian   from '../../assets/img-clients/bcomeridian.webp';
import bcomunicipal  from '../../assets/img-clients/bcomunicipal.webp';
import bconacion     from '../../assets/img-clients/bconacion.webp';
import bcopat        from '../../assets/img-clients/bcopat.webp';
import bcopiano      from '../../assets/img-clients/bcopiano.webp';
import bcorioja      from '../../assets/img-clients/bcorioja.webp';
import bcoroela      from '../../assets/img-clients/bcoroela.webp';
import bcosaenz      from '../../assets/img-clients/bcosaenz.webp';
import bcosanjuan    from '../../assets/img-clients/bcosanjuan.webp';
import bcosantacruz  from '../../assets/img-clients/bcosantacruz.webp';
import bcosantafe    from '../../assets/img-clients/bcosantafe.webp';
import bcosantiago   from '../../assets/img-clients/bcosantiago.webp';
import bcoservfin    from '../../assets/img-clients/bcoservfin.webp';
import bcoservtrans  from '../../assets/img-clients/bcoservtrans.webp';
import bcosucredito  from '../../assets/img-clients/bcosucredito.webp';
import bcotoyota     from '../../assets/img-clients/bcotoyota.webp';
import bcovalores    from '../../assets/img-clients/bcovalores.webp';
import bibank        from '../../assets/img-clients/bibank.webp';
import brubank       from '../../assets/img-clients/brubank.webp';
import cajadevalores from '../../assets/img-clients/cajadevalores.webp';
import redlink       from '../../assets/img-clients/redlink.webp';
import coopeande     from '../../assets/img-clients/coopeande.webp';
import creditoregional from '../../assets/img-clients/creditoregional.webp';
import gire          from '../../assets/img-clients/gire.webp';
import interbank     from '../../assets/img-clients/interbank.webp';
import mercantil     from '../../assets/img-clients/mercantil.webp';
import montemar      from '../../assets/img-clients/montemar.webp';
import naranjax      from '../../assets/img-clients/naranjax.webp';
import reba          from '../../assets/img-clients/reba.webp';
import sancorseguros from '../../assets/img-clients/sancorseguros.webp';
import uala          from '../../assets/img-clients/uala.webp';
import uilo          from '../../assets/img-clients/uilo.webp';
import bcocomercio   from '../../assets/img-clients/bcocomercio.webp';
import mercedes      from '../../assets/img-clients/mercedes.webp';
import tarjetanaranja from '../../assets/img-clients/tarjetanaranja.webp';
import GPAT          from '../../assets/img-clients/GPAT.webp';
import NAVE          from '../../assets/img-clients/NAVE.webp';
import cajadeahorrospa from '../../assets/img-clients/cajadeahorrospa.webp';

// ── Lista de clientes con país ────────────────────────────────────────────────
const clients = [
  { src: bcosaenz,       name: 'Banco Saenz',                  country: 'Argentina' },
  { src: bcocorp,        name: 'Banco de Córdoba Corporativo', country: 'Argentina' },
  { src: bcoind,         name: 'Banco Industrial',             country: 'Argentina' },
  { src: bcopat,         name: 'Banco Patagonia',              country: 'Argentina' },
  { src: bcorioja,       name: 'Banco Rioja',                  country: 'Argentina' },
  { src: bcobica,        name: 'Banco Bica',                   country: 'Argentina' },
  { src: bcodino,        name: 'Banco Dino',                   country: 'Argentina' },
  { src: bcobacs,        name: 'Banco BACS',                   country: 'Argentina' },
  { src: bcoentrerios,   name: 'Banco Entre Ríos',             country: 'Argentina' },
  { src: bcosanjuan,     name: 'Banco San Juan',               country: 'Argentina' },
  { src: bcosantacruz,   name: 'Banco Santa Cruz',             country: 'Argentina' },
  { src: bcosantafe,     name: 'Banco Santa Fe',               country: 'Argentina' },
  { src: brubank,        name: 'Brubank',                      country: 'Argentina' },
  { src: uilo,           name: 'Uilo',                         country: 'Argentina' },
  { src: uala,           name: 'Ualá',                         country: 'México'    },
  { src: bcodelsol,      name: 'Banco del Sol',                country: 'Argentina' },
  { src: naranjax,       name: 'Naranja X',                    country: 'Argentina' },
  { src: tarjetanaranja, name: 'Tarjeta Naranja',              country: 'Argentina' },
  { src: bibank,         name: 'BIBANK',                       country: 'Argentina' },
  { src: bcocorrientes,  name: 'Banco de Corrientes',          country: 'Argentina' },
  { src: bancor,         name: 'Bancor',                       country: 'Argentina' },
  { src: bcovalores,     name: 'Banco de Valores',             country: 'Argentina' },
  { src: bcomunicipal,   name: 'Banco Municipal',              country: 'Argentina' },
  { src: bcosantiago,    name: 'Banco Santiago del Estero',    country: 'Argentina' },
  { src: bcoservtrans,   name: 'Servicios de Transporte',      country: 'Argentina' },
  { src: bcoroela,       name: 'Banco Roela',                  country: 'Argentina' },
  { src: bcopiano,       name: 'Banco Piano',                  country: 'Argentina' },
  { src: bcotoyota,      name: 'Toyota Compañía Financiera',   country: 'Argentina' },
  { src: bcocomafi,      name: 'Banco Comafi',                 country: 'Argentina' },
  { src: bcogalicia,     name: 'Banco Galicia',                country: 'Argentina' },
  { src: bcohipotecario, name: 'Banco Hipotecario',            country: 'Argentina' },
  { src: cajadevalores,  name: 'Caja de Valores',              country: 'Argentina' },
  { src: bcomariva,      name: 'Banco Mariva',                 country: 'Argentina' },
  { src: bcoservfin,     name: 'Servicios Financieros',        country: 'Argentina' },
  { src: bcocoinag,      name: 'Banco Coinag',                 country: 'Argentina' },
  { src: reba,           name: 'Reba',                         country: 'Argentina' },
  { src: bcomeridian,    name: 'Banco Meridian',               country: 'Argentina' },
  { src: bcocolumbia,    name: 'Banco Columbia',               country: 'Argentina' },
  { src: bconacion,      name: 'Banco Nación',                 country: 'Argentina' },
  { src: montemar,       name: 'Montemar',                     country: 'Nicaragua' },
  { src: bcoicbc,        name: 'ICBC',                         country: 'Argentina' },
  { src: gire,           name: 'Gire',                         country: 'Argentina' },
  { src: bcosucredito,   name: 'Sucrédito',                    country: 'Colombia'  },
  { src: bcojulio,       name: 'Banco Julio',                  country: 'Argentina' },
  { src: creditoregional,name: 'Crédito Regional',             country: 'Costa Rica'},
  { src: balanz,         name: 'Balanz',                       country: 'Argentina' },
  { src: bcomacro,       name: 'Banco Macro',                  country: 'Argentina' },
  { src: interbank,      name: 'Interbank',                    country: 'Panamá'    },
  { src: sancorseguros,  name: 'Sancor Seguros',               country: 'Argentina' },
  { src: bcocomercio,    name: 'Banco Comercio',               country: 'Nicaragua' },
  { src: mercedes,       name: 'Mercedes',                     country: 'Argentina' },
  { src: redlink,        name: 'Redlink',                      country: 'Argentina' },
  { src: GPAT,           name: 'GPAT',                         country: 'Argentina' },
  { src: NAVE,           name: 'NAVE',                         country: 'Argentina' },
  { src: cajadeahorrospa,name: 'Caja de Ahorro Panamá',        country: 'Panamá'    },
  { src: coopeande,      name: 'Coopeande',                    country: 'Costa Rica'},
  { src: bcoficohsa,     name: 'Ficohsa',                      country: 'Honduras'  },
  { src: mercantil,      name: 'Mercantil',                    country: 'Colombia'  },
];

const COUNTRIES = ['Argentina', 'Colombia', 'Costa Rica', 'Honduras', 'México', 'Nicaragua', 'Panamá'];

// 5 filas de ~12 items (112px/item × 12 = 1344px < viewport ≈ 1600px).
// Al caber todos en el ancho visible, ningún logo desaparece:
// cuando uno sale a medias por un lado, su copia ya está entrando por el otro.
const row1 = clients.slice(0,  12);
const row2 = clients.slice(12, 24);
const row3 = clients.slice(24, 36);
const row4 = clients.slice(36, 47);
const row5 = clients.slice(47);

// ── Logo item ─────────────────────────────────────────────────────────────────
const LogoItem = ({ client, hoveredCountry }) => {
  const isActive = !hoveredCountry || client.country === hoveredCountry;

  return (
    <div className="flex-shrink-0 mx-4 flex items-center justify-center">
      <div className="w-28 h-14 flex items-center justify-center px-2 py-1.5 rounded-xl bg-white border border-slate-100 hover:border-blue-100 hover:shadow-md hover:shadow-blue-50 transition-all duration-200 group">
        <img
          src={client.src}
          alt={`Logo ${client.name}`}
          className={[
            'max-h-8 max-w-full w-auto object-contain transition-all duration-200',
            isActive
              ? 'opacity-100 grayscale-0'
              : 'opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0',
          ].join(' ')}
          loading="lazy"
          onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
        />
      </div>
    </div>
  );
};

// ── Fila de marquee ───────────────────────────────────────────────────────────
const MarqueeRow = ({ items, animClass, hoveredCountry }) => {
  // Triplicamos para que nunca haya huecos visibles durante el loop
  const tripled = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden py-2.5" aria-hidden="true">
      <div
        className={`flex ${animClass}`}
        style={{ width: 'max-content', willChange: 'transform', backfaceVisibility: 'hidden' }}
      >
        {tripled.map((client, i) => (
          <LogoItem key={`${client.name}-${i}`} client={client} hoveredCountry={hoveredCountry} />
        ))}
      </div>
      {/* Degradados laterales */}
      <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-10" />
    </div>
  );
};

// ── Componente principal ──────────────────────────────────────────────────────
const Clients = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const stats = [
    { value: `${clients.length}+`, label: 'Instituciones' },
    { value: '7',                   label: 'Países' },
    { value: 'LATAM',               label: 'Cobertura regional' },
  ];

  return (
    <section
      id="clientes"
      className="py-24 bg-slate-50 overflow-hidden"
      aria-labelledby="clients-heading"
    >
      {/* Cabecera */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-14"
      >
        <span className="eyebrow" style={{ justifyContent: 'center' }}>
          Casos de éxito
        </span>
        <h2
          id="clients-heading"
          className="display bold"
          style={{
            fontSize: 'clamp(28px, 3.8vw, 52px)',
            marginTop: 18,
            color: 'var(--fg)',
            letterSpacing: '-0.03em',
          }}
        >
          NUESTROS CLIENTES
        </h2>
        <p style={{ fontSize: 'clamp(15px, 1.3vw, 18px)', color: 'var(--fg-2)', marginTop: 14, maxWidth: '54ch', marginInline: 'auto', lineHeight: 1.5 }}>
          Empresas que confían en nuestros servicios
        </p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-10 mt-10"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-display font-bold text-4xl text-amber-500 leading-none">{value}</div>
              <div className="text-sm text-slate-500 mt-1.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── 4 filas de marquee ── */}
      <div className="space-y-3">
        <MarqueeRow items={row1} animClass="animate-marquee"              hoveredCountry={hoveredCountry} />
        <MarqueeRow items={row2} animClass="animate-marquee-reverse"      hoveredCountry={hoveredCountry} />
        <MarqueeRow items={row3} animClass="animate-marquee-slow"         hoveredCountry={hoveredCountry} />
        <MarqueeRow items={row4} animClass="animate-marquee-reverse-slow" hoveredCountry={hoveredCountry} />
        <MarqueeRow items={row5} animClass="animate-marquee"              hoveredCountry={hoveredCountry} />
      </div>

      {/* Países — hover filtra clientes por país */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 flex flex-wrap justify-center gap-3"
      >
        {COUNTRIES.map((country) => {
          const isSelected = hoveredCountry === country;
          return (
            <span
              key={country}
              onMouseEnter={() => setHoveredCountry(country)}
              onMouseLeave={() => setHoveredCountry(null)}
              className={[
                'font-display text-sm font-medium px-4 py-1.5 rounded-full border cursor-pointer select-none transition-all duration-200',
                isSelected
                  ? 'bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-200'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-700',
              ].join(' ')}
            >
              {country}
            </span>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Clients;
