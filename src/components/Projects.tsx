import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import search2 from '../assets/search2.png';
import delivery from '../assets/delivery1.jpg';
import chat from '../assets/chat3.png';

export default function Projects() {
  const projects = [
    {
      title: 'Search Git',
      description:
        'Aplicação que consome a API do GitHub e retorna os dados do usuário pesquisado.',
      image: search2,
      link: 'https://github.com/betortizPSG/api-github-dev',
      colSpan: 'col-span-1',
    },
    {
      title: 'Chat Cripto',
      description:
        'Chat criptografado(frontend) com a possibilidade de enviar mensagens de texto e imagens.',
      image: chat,
      link: 'https://github.com/betortizPSG/chat-cripto',
      colSpan: 'col-span-1',
    },
    {
      title: 'Delivery App',
      description:
        'Delivery de alimentos é um serviço que permite ao cliente receber o produto em casa, no trabalho ou onde estiver, sem precisar ir até o estabelecimento.',
      image: delivery,
      link: 'https://github.com/betortizPSG/food-commerce',
      colSpan: "col-span-1 md:col-span-2",
    },
  ];

  return (
    <>
      <section className='rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]'>
        <div className='container mx-auto max-w-4xl p-4 py-12'>
          <div className='relative p-4 text-center'>
            <h2 className='relative z-50 mb-2 text-white'>
              <span className='mr-2 font-headline text-3xl font-semibold'>
                Projetos &
              </span>
              <span className='font-handwriting text-4xl'>Portfólio</span>
            </h2>
            <p className='relative text-center text-gray-400'>
              Alguns dos projetos pessoais e que já realizei ao longo da minha
              trajetória como desenvolvedor full-stack.
            </p>
            <div className='absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10' />
          </div>

          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative m-4 h-52 cursor-default rounded-lg p-1 ${project.colSpan} bg-cover bg-center`}
                style={{ backgroundImage: `url('${project.image}')` }}
              >
                <div className='absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-slate-700 text-white opacity-0 transition-opacity group-hover:opacity-100'>
                  <h4 className='font-headline text-lg font-semibold'>
                    {project.title}
                  </h4>
                  <p className=' mb-1 p-2 text-sm'>{project.description}</p>
                  <a href={project.link} target='_blank'>
                    <HiArrowTopRightOnSquare className='h-10 w-10' />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className='absolute right-0 -mt-[6px] h-3 w-48 rounded-l-full bg-gradient-to-r from-gray-700 to-gray-600 md:w-96' />
    </>
  );
}
