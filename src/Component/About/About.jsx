import React, { Fragment } from "react";
import MyContext from "../../ContextApi/MyContaxt";
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/esm/Container";

const About = () => {
  return (
    <MyContext.Consumer>
      {(context) => (

       console.log("hello context",context),
        <Fragment>
          
<Container>
<h1 className="mt-3 mb-3">About Component</h1>

          <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>User Name</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
          
             {
                context && context.length ?

                 context.map((item, index)=>(
    
    
                     <tr key={index}>
                     <td>{item.id}</td>
                     <td>{item.name}</td>
                     <td>{item.email}</td>
                     <td>{item.phone}</td>
                     <td>{item.username}</td>
                     <td>{item.website}</td>
                   </tr>
                   )):
                   <tr className="text-center">
                   <td colSpan={9}>data not found</td>
                   </tr>
              }
      

      
 

          </tbody>
        </Table>
        </Container>
        </Fragment>
      )}
    </MyContext.Consumer>
  );
};

export default About;
