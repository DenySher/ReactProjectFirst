import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';

function App() {
  return (
    <div>
       <PageTitle title={'APP component'}/>
       <PageTitle title={'My friends'}/>
       <Rating value={0}/>
       <Accordion title={'Menu'} collapsed={false}/>
       <Accordion title={'Users'} collapsed={true}/>
       <Accordion title={'messages'} collapsed={true}/>
       <Rating value={1}/>
       <Rating value={2}/>
       <Rating value={3}/>
       <Rating value={4}/>
       <Rating value={5}/>
    </div>
  );
}

type PageTitlePropsType ={
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return (
    <h3>{props.title}</h3>
  )
}

export default App;
