import React from "react";
import { FiLinkedin, FiGithub } from "react-icons/fi";

const Contact = () => {
  return (
    <section className='my-28' id='contact'>
      <header className='px-5 text-2xl font-bold pt-10'>
        <h2>Contact Me</h2>
        <p className='text-base font-thin'>I'd love to hear your thoughts!</p>
      </header>
      <div className='md:mx-6'>
        <div className='md:w-6/12 md:px-0 p-5 my-5'>
          <div>
            <p className='font-bold'>Jobanpreet Singh</p>
            <p className='font-thin'>Winnipeg,Manitoba</p>
            <a
              href='mailto: mail@jobanpreet.ca'
              className='border-b-2 mt-3 inline-block border-gray-500'
            >
              Mail@jobanpreet.ca
            </a>
          </div>
          <div className='flex flex-row flex-wrap mt-7'>
            <div className='mr-4'>
              <a
                href='https://www.linkedin.com/in/joban-preetsingh'
                target='_blank'
                rel='noreferrer'
              >
                <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg'>
                  <FiLinkedin className='mr-1' size={24} />
                  LinkedIn
                </span>
              </a>
            </div>

            <div className='mr-4'>
              <a
                href='https://github.com/jobanpreet27'
                target='_blank'
                rel='noreferrer'
              >
                <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg'>
                  <FiGithub className='mr-1' size={24} />
                  GitHub
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
