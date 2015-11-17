import React from 'react';

const Navbar = React.createClass({
  displayName: 'Navbar',

  render() {
    return (
     <nav className="navbar navbar-default">
       <div className="container-fluid">
         <div className="navbar-header">
           <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
             <span className="sr-only">Toggle navigation</span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
           </button>
           <a className="navbar-brand" href="#">Career Crumbs</a>
         </div>

         <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
           <form className="navbar-form navbar-left" role="search">
             <div className="form-group">
               <input type="text" className="form-control" placeholder="Search" />
             </div>
             <button type="submit" className="btn btn-default">Submit</button>
           </form>
           <ul className="nav navbar-nav navbar-right">
             <li><a href="#">Discovery</a></li>
             <li><a href="#">Login</a></li>
           </ul>
         </div>
       </div>
    </nav>
    );
  }
});

export default Navbar;