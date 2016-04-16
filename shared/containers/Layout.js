import React from 'react'; 

const Layout = ({children}) => (
  <div>
    <h1>Create a new ticket</h1>
    {children}
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default Layout;