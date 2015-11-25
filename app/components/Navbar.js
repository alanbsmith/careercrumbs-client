import React from 'react';
import { Link } from 'react-router';

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
           <Link className="navbar-brand" to={`/questions`}>Career Crumbs</Link>
         </div>

         <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
           <form className="navbar-form navbar-left" role="search">
             <div className="form-group">
               <input type="text" className="form-control" placeholder="Search" />
             </div>
             <button type="submit" className="btn btn-default">Submit</button>
           </form>
           <ul className="nav navbar-nav navbar-right">
             <li><Link to={`/discovery`}>Discovery</Link></li>
             <li><Link to={`/ask`}>Ask</Link></li>
             <li><Link to={`/`}>Login</Link></li>
           </ul>
         </div>
       </div>
    </nav>
    );
  }
});

export default Navbar;
