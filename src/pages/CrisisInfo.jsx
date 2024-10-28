import React from 'react';

function CrisisInfo() {
  // Contenido de las crisis
  const crisisContent = {
    'desastres-naturales': {
      title: 'Desastres Naturales',
      description: 'Colombia es vulnerable a desastres como inundaciones, terremotos y deslizamientos de tierra. Aquí te proporcionamos guías para actuar en estas situaciones.',
      resources: [
        { name: 'Guía para Inundaciones', link: 'https://www.crantioquia.org.co/Noticias/ArtMID/446/ArticleID/766/191Qu233-hacer-antes-durante-y-despu233s-de-una-inundaci243n#:~:text=%2D%20Corte%20la%20luz%2C%20agua%20y,y%20seguras%20lo%20antes%20posible.' },
        { name: 'Cómo Actuar en un Terremoto', link: 'https://www.snet.gob.sv/ver/seccion+educativa/sismologia/que+hacer+.../' },
        { name: 'Prevención y Respuesta a Deslizamientos de Tierra', link: 'https://socoemergency.org/preparese/peligros-locales/deslizamientos-de-tierra/' }
      ]
    },
    'emergencias-salud': {
      title: 'Emergencias de Salud',
      description: 'Durante emergencias de salud, es fundamental saber cómo actuar. Aquí encontrarás información sobre primeros auxilios y acceso a servicios.',
      resources: [
        { name: 'Primeros Auxilios Básicos', link: 'https://asb-latam.org/wp-content/uploads/2020/02/Manual-Primeros-auxilios.pdf' },
      ]
    },
    'conflictos-sociales': {
      title: 'Conflictos Sociales',
      description: 'En tiempos de conflictos sociales, la seguridad es primordial. Aquí te damos consejos sobre cómo protegerte y actuar durante protestas.',
      resources: [
        { name: 'Guía para Protestas Seguras', link: 'https://protesta.defensoria.gov.co/assets/guia-de-acompanamiento-a-las-movilizaciones-ciudadanas.pdf' },
        { name: 'Cómo Manejar el Desplazamiento Forzado', link: 'https://www.unidadvictimas.gov.co/paso-a-paso-para-el-registro/' }
      ]
    },
    'crisis-medioambientales': {
      title: 'Crisis Medioambientales',
      description: 'Algunas comunidades se ven afectadas por la deforestación y la contaminación. Aquí te damos información sobre cómo enfrentarlas.',
      resources: [
        { name: 'Cómo Protegerte de la Deforestación', link: 'https://www.ceupe.com/blog/que-medidas-emplear-para-reducir-el-dano-causado-por-la-deforestacion.html' },
        { name: 'Enfrentando la Contaminación del Agua y del Aire', link: 'https://www.nationalgeographicla.com/medio-ambiente/2023/01/7-acciones-para-combatir-la-contaminacion-ambiental' }
      ]
    }
  };

  return (
    <div className="container mt-4">
      <h2>Información sobre Crisis para Comunidades Minoritarias en Colombia</h2>
      <p>Aquí encontrarás guías y recursos diseñados para apoyar a las comunidades minoritarias en Colombia durante situaciones de crisis.</p>

      {/* Sección de Desastres Naturales */}
      <section className="crisis-section">
        <h3>{crisisContent['desastres-naturales'].title}</h3>
        <p>{crisisContent['desastres-naturales'].description}</p>
        <ul>
          {crisisContent['desastres-naturales'].resources.map((resource, index) => (
            <li key={index}><a href={resource.link}>{resource.name}</a></li>
          ))}
        </ul>
      </section>

      {/* Sección de Emergencias de Salud */}
      <section className="crisis-section">
        <h3>{crisisContent['emergencias-salud'].title}</h3>
        <p>{crisisContent['emergencias-salud'].description}</p>
        <ul>
          {crisisContent['emergencias-salud'].resources.map((resource, index) => (
            <li key={index}><a href={resource.link}>{resource.name}</a></li>
          ))}
        </ul>
      </section>

      {/* Sección de Conflictos Sociales */}
      <section className="crisis-section">
        <h3>{crisisContent['conflictos-sociales'].title}</h3>
        <p>{crisisContent['conflictos-sociales'].description}</p>
        <ul>
          {crisisContent['conflictos-sociales'].resources.map((resource, index) => (
            <li key={index}><a href={resource.link}>{resource.name}</a></li>
          ))}
        </ul>
      </section>

      {/* Sección de Crisis Medioambientales */}
      <section className="crisis-section">
        <h3>{crisisContent['crisis-medioambientales'].title}</h3>
        <p>{crisisContent['crisis-medioambientales'].description}</p>
        <ul>
          {crisisContent['crisis-medioambientales'].resources.map((resource, index) => (
            <li key={index}><a href={resource.link}>{resource.name}</a></li>
          ))}
        </ul>
      </section>

      {/* Recursos adicionales */}
      <section className="crisis-section">
        <h3>Recursos Adicionales</h3>
        <p>
          También puedes acceder a ayuda adicional a través de estas organizaciones y sitios gubernamentales que apoyan a las comunidades en momentos de crisis:
        </p>
        <ul>
          <li><a href="https://portal.gestiondelriesgo.gov.co" target="_blank" rel="noopener noreferrer">Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD)</a></li>
          <li><a href="https://www.defensoria.gov.co/" target="_blank" rel="noopener noreferrer">Defensoría del Pueblo</a></li>
          <li><a href="https://www.cruzrojacolombiana.org/" target="_blank" rel="noopener noreferrer">Cruz Roja Colombiana</a></li>
        </ul>
      </section>
    </div>
  );

   
  
}

export default CrisisInfo;
