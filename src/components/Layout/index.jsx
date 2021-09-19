import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../Header/index';

import { Main } from './styles';

const Layout = (props) => {
  return (
    <>
      <Helmet>
        <title>React Boilerplate</title>
      </Helmet>
      <Header />
      <Main>{props.children}</Main>
    </>
  );
};

export default Layout;
