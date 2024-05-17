export default function Testimonial({
  imgfront1,
  imgfront2,
  imgback1,
  imgback2,
  imgback3,
  imgback4,
  imgback5,
  imgdevops1,
  imgdoc,
  name,
}) {
  return (
    <>
      <div className='grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800'>
        <figure className='flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700'>
          <blockquote className='max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400'>
            <h3 className='text-lg font-semibold text-card-bg '>
              Desarrolladores Frontend
            </h3>
            <p className='my-4'>
              Experto en crear interfaces de usuario atractivas y funcionales.
              Trabaja en estrecha colaboración con diseñadores y desarrolladores
              backend para implementar la lógica de frontend y garantizar una
              experiencia de usuario fluida.
            </p>
          </blockquote>
          <figcaption className='flex items-center justify-center '>
            <img
              className='rounded-full w-9 h-9'
              src={imgfront1}
              alt='profile picture'
            />
            <img
              className='rounded-full w-9 h-9'
              src={imgfront2}
              alt='profile picture'
            />
          </figcaption>
        </figure>
        <figure className='flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700'>
          <blockquote className='max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400'>
            <h3 className='text-lg font-semibold text-card-bg'>
              Desarrolladores Backend
            </h3>
            <p className='my-4'>
              Especializado en la creación de la lógica de servidor y la gestión
              de bases de datos para garantizar el funcionamiento eficiente de
              la aplicación. Colabora estrechamente con el equipo frontend para
              implementar las funcionalidades requeridas.
            </p>
          </blockquote>
          <figcaption className='flex items-center justify-center '>
            <img
              className='rounded-full w-9 h-9'
              src={imgback1}
              alt='profile picture'
            />
            <img
              className='rounded-full w-9 h-9'
              src={imgback2}
              alt='profile picture'
            />
            <img
              className='rounded-full w-9 h-9'
              src={imgback3}
              alt='profile picture'
            />
            <img
              className='rounded-full w-9 h-9'
              src={imgback4}
              alt='profile picture'
            />
            <img
              className='rounded-full w-9 h-9'
              src={imgback5}
              alt='profile picture'
            />
          </figcaption>
        </figure>
        <figure className='flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700'>
          <blockquote className='max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400'>
            <h3 className='text-lg font-semibold text-card-bg'>
              Documentacion
            </h3>
            <p className='my-4'>
              Encargado de documentar el código de la aplicación para facilitar
              la colaboración y el mantenimiento. Crea manuales de usuario y
              guías de instalación para garantizar que los usuarios puedan
              utilizar la aplicación sin problemas.
            </p>
          </blockquote>
          <figcaption className='flex items-center justify-center '>
            <img
              className='rounded-full w-9 h-9'
              src={imgdoc}
              alt='profile picture'
            />
            <div className='space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3'>
              <div>{name}</div>
            </div>
          </figcaption>
        </figure>
        <figure className='flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700'>
          <blockquote className='max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400'>
            <h3 className='text-lg font-semibold text-card-bg'>
              Desarrollador DevOps
            </h3>
            <p className='my-4'>
              Encargado de implementar y gestionar las herramientas y procesos
              necesarios para facilitar la colaboración entre los equipos de
              desarrollo y operaciones. Automatiza tareas y garantiza la
              disponibilidad y confiabilidad de los sistemas.
            </p>
          </blockquote>
          <figcaption className='flex items-center justify-center '>
            <img
              className='rounded-full w-9 h-9'
              src={imgdevops1}
              alt='profile picture'
            />
          </figcaption>
        </figure>
      </div>
    </>
  )
}
