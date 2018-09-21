import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SnowStorm from 'react-snowstorm';

class App extends Component {
    state={
        stylesDiscount: "50%",
        onlineDiscount: "30%",
        storesDiscount: "20%",
        code: "GAPFALL",
        categories: ["WOMEN","MEN","GIRLS","BOYS","TODDLE GIRL","TODDLER BOY","BABY GIRL","BABY BOY"]

    }
    render() {
        return (
            <div>
                <SnowStorm />
                <div className="app-container">
                    <div className="discount">
                        <h4>
                            ONLINE & IN STORES
                        </h4>
                        <h1 style={{fontSize:'40px'}}>
                            UPTO {this.state.stylesDiscount} OFF 1000s OF STYLES
                        </h1>
                    </div>
                    <div className="gap-cash">
                        <h4>
                            You can also use your
                        </h4>
                        <h1>
                            GAP CASH
                        </h1>
                        <h4>
                            <a style={{color:"white"}} href=""> SIGN IN TO REDEEM</a>
                        </h4>
                    </div>

                    <div className="no-cash">
                        <h4>
                            No GapCash?
                        </h4>
                        <h1>
                            EXTRA {this.state.onlineDiscount} OFF ONLINE
                        </h1>
                        <h1>
                            EXTRA {this.state.storesDiscount} OFF IN STORES
                        </h1>
                        <h4>
                            Code {this.state.code}
                        </h4>
                    </div>
                    <div className="categories">
                        {this.state.categories.map(c=>(
                            <li >
                                <a style={{color:"white"}} href=""> {c} {"|"}</a>
                            </li>
                        ))}

                    </div>


                </div>


            </div>
        );
    }
}

export default App;
