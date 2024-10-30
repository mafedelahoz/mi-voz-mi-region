interface InformacionCrisis {
  title: string;
  description: string;
  resources: Recurso[];
}

interface Recurso {
  name: string;
  link: string;
}

export default function Informacion() {
  const informacionesCrisis: InformacionCrisis[] = [
    {
      title: 'Desastres Naturales',
      description: 'Colombia es vulnerable a desastres como inundaciones, terremotos y deslizamientos de tierra. Aquí te proporcionamos guías para actuar en estas situaciones.',
      resources: [
        { 
          name: 'Guía para Inundaciones', 
          link: 'https://www.crantioquia.org.co/Noticias/ArtMID/446/ArticleID/766/191Qu233-hacer-antes-durante-y-despu233s-de-una-inundaci243n#:~:text=%2D%20Corte%20la%20luz%2C%20agua%20y,y%20seguras%20lo%20antes%20posible.' 
        },
        { 
          name: 'Cómo Actuar en un Terremoto', 
          link: 'https://www.snet.gob.sv/ver/seccion+educativa/sismologia/que+hacer+.../' 
        },
        { 
          name: 'Prevención y Respuesta a Deslizamientos de Tierra', 
          link: 'https://socoemergency.org/preparese/peligros-locales/deslizamientos-de-tierra/' 
        }
      ]
    },
    {
      title: 'Emergencias de Salud',
      description: 'Durante emergencias de salud, es fundamental saber cómo actuar. Aquí encontrarás información sobre primeros auxilios y acceso a servicios.',
      resources: [
        { 
          name: 'Primeros Auxilios Básicos', 
          link: 'https://asb-latam.org/wp-content/uploads/2020/02/Manual-Primeros-auxilios.pdf' 
        }
      ]
    },
    {
      title: 'Conflictos Sociales',
      description: 'En tiempos de conflictos sociales, la seguridad es primordial. Aquí te damos consejos sobre cómo protegerte y actuar durante protestas.',
      resources: [
        { 
          name: 'Guía para Protestas Seguras', 
          link: 'https://protesta.defensoria.gov.co/assets/guia-de-acompanamiento-a-las-movilizaciones-ciudadanas.pdf' 
        },
        { 
          name: 'Cómo Manejar el Desplazamiento Forzado', 
          link: 'https://www.unidadvictimas.gov.co/paso-a-paso-para-el-registro/' 
        }
      ]
    },
    {
      title: 'Crisis Medioambientales',
      description: 'Algunas comunidades se ven afectadas por la deforestación y la contaminación. Aquí te damos información sobre cómo enfrentarlas.',
      resources: [
        { 
          name: 'Cómo Protegerte de la Deforestación', 
          link: 'https://www.ceupe.com/blog/que-medidas-emplear-para-reducir-el-dano-causado-por-la-deforestacion.html' 
        },
        { 
          name: 'Enfrentando la Contaminación del Agua y del Aire', 
          link: 'https://www.nationalgeographicla.com/medio-ambiente/2023/01/7-acciones-para-combatir-la-contaminacion-ambiental' 
        }
      ]
    }
  ];
  


  return (
    <div className="p-6 space-y-3 w-full">
      {informacionesCrisis.map((informacion) => (
        <div key={informacion.title} className="bg-gray-100 p-6 rounded-lg shadow-lg text-gray-800">
          <h2 className="text-xl font-bold mb-2">{informacion.title}</h2>
          <p className="text-base mb-4">{informacion.description}</p>
          <ul className="space-y-2">
            {informacion.resources.map((resource) => (
              <li key={resource.name}>
                <a href={resource.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}