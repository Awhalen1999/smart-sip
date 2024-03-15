import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer items-center p-4 bg-base-200 text-base-content font-main'>
      <aside className='items-center grid-flow-col'>
        <p className='text-2xl font-header'>SmartSip</p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav className='flex items-center grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
        <p>Contact me</p>
        <a
          href='https://www.linkedin.com/in/alex-whalen-0496b227b/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-3xl'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://github.com/Awhalen1999'
          target='_blank'
          rel='noopener noreferrer'
          className='text-3xl'
        >
          <FaGithub />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
