// import { Component } from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";
// import { MenuItems } from "./MenuItems";

// class Navbar extends Component{
//     state = {clicked:false};
//     handleClick =()=>{
//         this.setState({clicked: !this.state.clicked})
//     }
//     render(){
//         return(
//             <nav className="NavbarItems">
//                 <h1  className="navbar-logo">D.IAM</h1>
//                 <div className="menu-icons" onClick={this.handleClick}>
//                     <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
//                 </div>
//                 <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
//                     {MenuItems.map((item, index)=>{
//                         return(
//                         <li key={index}>
//                             {/* <a className={item.cName} href="/"><i className={item.icon}></i>  {item.title}</a> */}
//                             <Link className={item.cName} to={item.url}><i className={item.icon}></i>  {item.title}</Link>
//                         </li>
//                         )
//                     })}
//                     <button>Sign Up</button>
//                 </ul>
//             </nav>
//         )
//     }
// }

// export default Navbar;


//PEMBARUAN tgl 24 agustus
// import { Component } from "react";
// import "./Navbar.css";
// import { Link, useNavigate } from "react-router-dom";
// import { MenuItems } from "./MenuItems";
// import { auth } from "../firebase"; // Import Firebase auth
// import { onAuthStateChanged, signOut } from "firebase/auth"; // Import necessary Firebase functions

// class Navbar extends Component {
//     state = {
//         clicked: false,
//         isAuthenticated: false, // Track if user is authenticated
//     };

//     componentDidMount() {
//         // Listen to authentication state changes
//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 this.setState({ isAuthenticated: true });
//             } else {
//                 this.setState({ isAuthenticated: false });
//             }
//         });
//     }

//     handleClick = () => {
//         this.setState({ clicked: !this.state.clicked });
//     };

//     handleSignUp = () => {
//         this.props.navigate('/register');
//     };

//     handleLogout = async () => {
//         await signOut(auth); // Sign out the user
//         this.props.navigate('/'); // Redirect to login page
//     };

//     render() {
//         return (
//             <nav className="NavbarItems">
//                 <h1 className="navbar-logo">D.IAM</h1>
//                 <div className="menu-icons" onClick={this.handleClick}>
//                     <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
//                 </div>
//                 <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
//                     {MenuItems.map((item, index) => {
//                         return (
//                             <li key={index}>
//                                 <Link className={item.cName} to={item.url}><i className={item.icon}></i>  {item.title}</Link>
//                             </li>
//                         )
//                     })}
//                     {this.state.isAuthenticated ? (
//                         <button onClick={this.handleLogout}>Logout</button>
//                     ) : (
//                         <button onClick={this.handleSignUp}>Sign Up</button>
//                     )}
//                 </ul>
//             </nav>
//         )
//     }
// }

// export default function NavbarWithNavigation(props) {
//     const navigate = useNavigate();
//     return <Navbar {...props} navigate={navigate} />;
// }

// import { Component } from "react";
// import "./Navbar.css";
// import { Link, useNavigate } from "react-router-dom";
// import { MenuItems } from "./MenuItems";
// import { auth } from "../firebase";
// import { onAuthStateChanged, signOut } from "firebase/auth";

// class Navbar extends Component {
//     state = {
//         clicked: false,
//         isAuthenticated: false, // Track if user is authenticated
//     };

//     componentDidMount() {
//         // Listen to authentication state changes
//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 this.setState({ isAuthenticated: true });
//             } else {
//                 this.setState({ isAuthenticated: false });
//             }
//         });
//     }

//     handleClick = () => {
//         if (!this.props.disabled) { // Prevent click actions if Navbar is disabled
//             this.setState({ clicked: !this.state.clicked });
//         }
//     };

//     handleSignUp = () => {
//         if (!this.props.disabled) { // Prevent navigation if Navbar is disabled
//             this.props.navigate('/register');
//         }
//     };

//     handleLogout = async () => {
//         if (!this.props.disabled) { // Prevent logout if Navbar is disabled
//             await signOut(auth); // Sign out the user
//             this.setState({ isAuthenticated: false }); // Update authentication state
//             this.props.navigate('/'); // Redirect to home page
//         }
//     };

//     render() {
//         const navbarClassName = `NavbarItems ${this.props.disabled ? 'navbar-disabled' : ''}`;
        
//         return (
//             <nav className={navbarClassName}>
//                 <h1 className="navbar-logo">D.IAM</h1>
//                 <div className="menu-icons" onClick={this.handleClick}>
//                     <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
//                 </div>
//                 <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
//                     {MenuItems.map((item, index) => {
//                         return (
//                             <li key={index}>
//                                 <Link className={item.cName} to={item.url} style={{ pointerEvents: this.props.disabled ? 'none' : 'auto' }}>
//                                     <i className={item.icon}></i>  {item.title}
//                                 </Link>
//                             </li>
//                         )
//                     })}
//                     {this.state.isAuthenticated ? (
//                         <button onClick={this.handleLogout} disabled={this.props.disabled}>Logout</button>
//                     ) : (
//                         <button onClick={this.handleSignUp} disabled={this.props.disabled}>Sign Up</button>
//                     )}
//                 </ul>
//             </nav>
//         )
//     }
// }

// export default function NavbarWithNavigation(props) {
//     const navigate = useNavigate();
//     return <Navbar {...props} navigate={navigate} />;
// }


import { Component } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

class Navbar extends Component {
    state = {
        clicked: false,
        isAuthenticated: false,
    };

    componentDidMount() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.setState({ isAuthenticated: true });
            } else {
                this.setState({ isAuthenticated: false });
            }
        });
    }

    handleClick = () => {
        if (!this.props.disabled) {
            this.setState({ clicked: !this.state.clicked });
        }
    };

    handleSignUp = () => {
        if (!this.props.disabled) {
            this.props.navigate('/register');
        }
    };

    handleLogout = async () => {
        if (!this.props.disabled) {
            await signOut(auth);
            this.setState({ isAuthenticated: false });
            this.props.navigate('/');
        }
    };

    render() {
        const navbarClassName = `NavbarItems ${this.props.disabled ? 'navbar-disabled' : ''}`;
        
        return (
            <nav className={navbarClassName}>
                <h1 className="navbar-logo">D.IAM</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url} style={{ pointerEvents: this.props.disabled ? 'none' : 'auto' }}>
                                    <i className={item.icon}></i>  {item.title}
                                </Link>
                            </li>
                        )
                    })}
                    {this.state.isAuthenticated ? (
                        <button onClick={this.handleLogout} disabled={this.props.disabled}>Logout</button>
                    ) : (
                        <button onClick={this.handleSignUp} disabled={this.props.disabled}>Sign Up</button>
                    )}
                </ul>
            </nav>
        )
    }
}

export default function NavbarWithNavigation(props) {
    const navigate = useNavigate();
    return <Navbar {...props} navigate={navigate} />;
}

