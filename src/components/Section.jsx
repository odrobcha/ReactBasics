import React from 'react';
//use forwarded props  - ...props (custom name) - means to collect of rest props to use the
const Section = ({title, children, ...props}) =>{
    return(
      <section {...props}>
          <h2>{title}</h2>
          {children}
      </section>
    )
};

export default Section
