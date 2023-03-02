import React from 'react'
import Form from "./approval-components/Form";
import Header from "./approval-components/Header";
import SearchData from './approval-components/SearchData';
import Title from "./approval-components/Title";

const Approval = () => {
  return (
    <div>
      <>
        {/* <Header /> */}
        <Title />
        <Form />
        <SearchData />
    </>
    </div>
  )
}

export default Approval
