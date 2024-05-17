import Card from '@/components/Card'
import Testimonial from '@/components/Testimonial'
// import '@fontsource-variable/onest'

export default function Preinscription() {
  return (
    <>
      <div className='mx-auto max-w-screen-lg md:w-full md:max-w-4xl py-10'>
        <article className='pt-36 pb-14 text-6xl font-bold text-center'>
          <span className='text-card-bg'>NUESTRO EQUIPO</span>
        </article>
        <div>
          <Testimonial
            imgfront1='https://media.licdn.com/dms/image/D4D03AQGEwAnxgodh8g/profile-displayphoto-shrink_800_800/0/1685929786505?e=1721260800&v=beta&t=gnQ6XR-9ZVHUxq_XGHo_sN6Vt5KrCmTgEWboiuojXbk'
            imgfront2='https://media.licdn.com/dms/image/D4E03AQGR4d200ANFKA/profile-displayphoto-shrink_800_800/0/1715571062837?e=1721260800&v=beta&t=yoRO0UZllZ8jOaVVnDnua6d0dunMDxBKW3C-Ku1AWK0'
            imgback1='https://media.licdn.com/dms/image/D4E03AQGEAhC5pwSQmg/profile-displayphoto-shrink_800_800/0/1690136367411?e=1721260800&v=beta&t=1pcEjwbOCWHXjO94pMKOguzxf-vBGvHa074O_ntL4Kg'
            imgback2='https://media.licdn.com/dms/image/D4E03AQG6SZBTvEyLnA/profile-displayphoto-shrink_800_800/0/1713656694979?e=1721260800&v=beta&t=D-HEQMoEn9DLCWHgQcTUDkUbnnJ9UxVVhtPfV2aY6ZM'
            imgback3='https://media.licdn.com/dms/image/D4E03AQFhOvffmMt5YA/profile-displayphoto-shrink_800_800/0/1713651907985?e=1721260800&v=beta&t=o0ycWu7MscqOvUYdD9PYl6DMfBWUiIvyR7-taEEpGGE'
            imgback4='https://media.licdn.com/dms/image/D4E03AQGR4d200ANFKA/profile-displayphoto-shrink_800_800/0/1715571062837?e=1721260800&v=beta&t=yoRO0UZllZ8jOaVVnDnua6d0dunMDxBKW3C-Ku1AWK0'
            linkdlind='https://www.linkedin.com/in/dante-samuel-rodriguez-chambi-444041279/'
            imgback5='https://media.licdn.com/dms/image/D4D03AQGEwAnxgodh8g/profile-displayphoto-shrink_800_800/0/1685929786505?e=1721260800&v=beta&t=gnQ6XR-9ZVHUxq_XGHo_sN6Vt5KrCmTgEWboiuojXbk'
            imgdevops1='https://media.licdn.com/dms/image/D4E35AQGtYZYxcMQTIw/profile-framedphoto-shrink_800_800/0/1713551875414?e=1716577200&v=beta&t=f7R_mpoCGhlzt6BWihsiU38jlJfLajrjj-AreCvLW7k'
            imgdoc='https://media.licdn.com/dms/image/D4E03AQEbP9bkxbTOcg/profile-displayphoto-shrink_800_800/0/1713669688871?e=1721260800&v=beta&t=tERTjCOtvQB6ECQ4evESORKwrF_yP-ARvuk6HNR2QFs'
            name=''
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center'>
          <Card
            name='Aarón Apaza Barra'
            img='https://media.licdn.com/dms/image/D4D03AQGEwAnxgodh8g/profile-displayphoto-shrink_800_800/0/1685929786505?e=1721260800&v=beta&t=gnQ6XR-9ZVHUxq_XGHo_sN6Vt5KrCmTgEWboiuojXbk'
            linkdlind='https://www.linkedin.com/in/aaronbarra-dev/'
            github='https://github.com/aaronbarra040998'
          />
          <Card
            name='Andre Gacia Aragon'
            img='https://media.licdn.com/dms/image/D4E35AQGtYZYxcMQTIw/profile-framedphoto-shrink_800_800/0/1713551875414?e=1716577200&v=beta&t=f7R_mpoCGhlzt6BWihsiU38jlJfLajrjj-AreCvLW7k'
            github='https://github.com/andregarci'
          />
          <Card
            name='Luis Gutierrez Martinez'
            img='https://media.licdn.com/dms/image/D4E03AQFhOvffmMt5YA/profile-displayphoto-shrink_800_800/0/1713651907985?e=1721260800&v=beta&t=o0ycWu7MscqOvUYdD9PYl6DMfBWUiIvyR7-taEEpGGE'
            linkdlind='https://www.linkedin.com/in/luisgutierrez811/'
            github='https://github.com/jesus8556'
          />
          <Card
            name='Alfredo Mescco Quispe'
            img='https://media.licdn.com/dms/image/D4E03AQEbP9bkxbTOcg/profile-displayphoto-shrink_800_800/0/1713669688871?e=1721260800&v=beta&t=tERTjCOtvQB6ECQ4evESORKwrF_yP-ARvuk6HNR2QFs'
            linkdlind='https://www.linkedin.com/in/rosendo-alfredo-mescco-quispe-564270233/'
            github='https://github.com/alfredomesccotecsup'
          />
          <Card
            name='Dante Rodríguez Chambi'
            img='https://media.licdn.com/dms/image/D4E03AQGR4d200ANFKA/profile-displayphoto-shrink_800_800/0/1715571062837?e=1721260800&v=beta&t=yoRO0UZllZ8jOaVVnDnua6d0dunMDxBKW3C-Ku1AWK0'
            linkdlind='https://www.linkedin.com/in/dante-samuel-rodriguez-chambi-444041279/'
            github='https://github.com/DanniDevv'
          />
          <Card
            name='Patrico Venero Medina'
            img='https://media.licdn.com/dms/image/D4E03AQGEAhC5pwSQmg/profile-displayphoto-shrink_800_800/0/1690136367411?e=1721260800&v=beta&t=1pcEjwbOCWHXjO94pMKOguzxf-vBGvHa074O_ntL4Kg'
            linkdlind='https://www.linkedin.com/in/patricio-venero-medina-3b3bb923b/'
            github='https://github.com/patriciovenero'
          />
          <Card
            name='Yefferson Zuñiga Justo'
            img='https://media.licdn.com/dms/image/D4E03AQG6SZBTvEyLnA/profile-displayphoto-shrink_800_800/0/1713656694979?e=1721260800&v=beta&t=D-HEQMoEn9DLCWHgQcTUDkUbnnJ9UxVVhtPfV2aY6ZM'
            linkdlind='https://www.linkedin.com/in/yefersson-guillermo-zu%C3%B1iga-justo-509237279/'
            github='https://github.com/YeferssonZ'
          />
        </div>
        
      </div>
    </>
  )
}
