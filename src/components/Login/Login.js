import React from 'react';
import { withRouter, Redirect } from 'react-router-dom'


class Login extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const { onChangeName, onChangePW, onChangeEmail, Login, Register } = this.props
        return (
            <div className="center bw2 shadow-3 mt5 pt1">
            <p className="mt5 tc b f2 lh-copy">Supply Chain Management ver2.0</p>
            <div className="mt2 tc" style={{"display": "flex", "flexDirection":"row"}}>
            <main className="pa4 black-80 mr1 br b--near-white">
                <form className="measure right">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input onChange={onChangeEmail} className="pa2 input-reset ba w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input onChange={onChangeName} className="pa2 input-reset ba w-100" type="text" name="name"  id="name"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input onChange={onChangePW} className="b pa2 input-reset ba w-100" type="password" name="password"  id="password"/>
                    </div>
                    </fieldset>
                    <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" onClick={Login} value="Login"/>
                    </div>
                </form>
                </main>
                <main className="pa4 black-80">
                <form className="measure right">
                    <fieldset className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Don't have an Account? Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="regemail-address">Email</label>
                        <input onChange={onChangeEmail} className="pa2 input-reset ba w-100" type="email" name="regemail-address" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="regname">Name</label>
                        <input onChange={onChangeName} className="pa2 input-reset ba w-100" type="text" name="regname" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="regpassword">Password</label>
                        <input onChange={onChangePW} className="b pa2 input-reset ba w-100" type="password" name="regpassword" />
                    </div>
                    </fieldset>
                    <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" onClick={Register} value="Register"/>
                    </div>
                </form>
            </main>
        </div>
        </div>
        )
    }
}

export default withRouter(Login);