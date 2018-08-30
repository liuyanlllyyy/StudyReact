import React, { Component } from 'react';
import {HashRouter,Route,Link,Switch} from 'react-router-dom'
import Main from './Main';
import about from './about';
import topic from './topic';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
           <HashRouter>
               <div>
                   <ul>
                       <li>
                           <Link to = '/'>Home</Link>
                       </li>
                       <li>
                           <Link to = '/about'>about</Link>
                       </li>
                       <li>
                           <Link to = '/topics'>topics</Link>
                       </li>
                   </ul>

                   <hr/>
                   {/* exact 精准匹配 */}
                   <Route exact ={true} path = "/" component={Main}></Route>
                   <Route path = "/about" component={about}></Route>
                   <Route path = "/topics" component={topic}></Route>

               </div>
           </HashRouter>
        );
    }
}

export default Home;