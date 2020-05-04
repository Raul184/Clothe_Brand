import React , { Profiler } from 'react';

import Directory from '../../components/directory/directory.component';

import { HomePageDiv } from './homepage.styles';

const HomePage = () => (
  <HomePageDiv>
    <Profiler 
      id="Profiler for HomePage"                                  // Mount or re-render
      onRender={( id , phase , actualDuration ) => console.log({ id ,phase ,actualDuration })}>
      <Directory />
    </Profiler>
  </HomePageDiv>
)

export default HomePage;
