import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/15791870?s=460&u=da8e017d7d5251e6773052421047303fb79d2f72&v=4"
            alt="CodeAkio"
          />
          <div>
            <strong>CodeAkio/GoBarber</strong>
            <p>Sistema de agendamento de barbearia</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/15791870?s=460&u=da8e017d7d5251e6773052421047303fb79d2f72&v=4"
            alt="CodeAkio"
          />
          <div>
            <strong>CodeAkio/GoBarber</strong>
            <p>Sistema de agendamento de barbearia</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
