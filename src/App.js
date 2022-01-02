import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
function App() {

    const [fname, setName] = useState("");
    const [lname, setLname] = useState("");
    const [password, setPassword] = useState("");
    const [Confpass, setconfirm] = useState("");
    const [email, setEmail] = useState("");
    const [mobileno, setnom] = useState("");
    const [country, setcountry] = useState("");
    const[edu,setEdu]=useState({})

    let gow = ["select", "India", "America", "China", "Japan"];


    return (
    
        <div className="img">
            <div className="master_class">


                <div className="sub_class">
                    <h1>Register form</h1>


                    <div className="subCommonClass">


                        <div className="subommonclasII">
                            <label>FirstName</label>
                            <input id="f1" onChange={(inputProperties) => { setName(inputProperties.target.value) }} placeholder="enter your fname" />
                            {fname.length === 0 ? <p>please enter fristname</p> : isNaN(fname) ? "" : <p>type only alphabets</p>}
                        </div>
                        <div className="subommonclasII">
                            <label>LastNamesss</label>

                            <input id="l1" onChange={(inputProperties) => { setLname(inputProperties.target.value) }} placeholder="enter your fname" />
                            {lname.length === 0 ? <p>please enter lastname</p> : isNaN(lname) ? "" : <p>type only alphabets</p>}

                        </div>

                    </div>

                    <div className="subCommonClass">

                        <div className="subommonclasII">
                            <label>Password</label>
                            <input id="p1" onChange={(inputProperties) => { setPassword(inputProperties.target.value) }} type="password" />
                            {password.length === 0 ? <p>please enter password</p> : ""}

                        </div>
                        <div classNameName="subommonclasII">
                            <label>Confpass </label>
                            <input id="c1" onChange={(inputProperties) => { setconfirm(inputProperties.target.value) }} />
                            {Confpass.length === 0 ? <p>please conform your password</p> : ""}
                        </div>

                    </div>

                    <div className="subCommonClass">
                        <div clasNames="subommonclasII">
                            <label>Email ID</label>
                            <input id="e1" onChange={(inputProperties) => { setEmail(inputProperties.target.value) }} />
                            {email.length === 0 ? <p>please enter your email</p> : ""}{email.includes("@")},{email.includes(".")}

                        </div>
                        <div className="subommonclasII">
                            <label>Mobile.No</label>
                            <input id="m1" onChange={(inputProperties) => { setnom(inputProperties.target.value) }} type="text" maxlength="10" />
                            {mobileno.length === 0 ? <p>please enter your mobilenumber </p> : ""}
                        </div>

                    </div>
                    

                    <div className="subCommonClass">
                        <div className="subommonclasII">
                            <label>country</label>
                            <select id="con" onchange="country()">
                                <option>select</option>
                                <option>India</option>
                                <option>America</option>
                                <option>China</option>
                                <option>Japan</option>

                            </select>

                        </div>
                        <div className="subommonclasII">
                            <label>state</label>
                            <select id="sta">

                            </select>

                        </div>

                    </div>
                    <div className="subCommonClass">
                        <div className="subommonclasII" id="gen">
                            <label>Gender</label>

                            <input type="radio" name="vinay" id="male" value="1" />
                            <label>male</label>

                            <input type="radio" name="vinay" id="female" value="2" />
                            <label>female</label>

                        </div>


                    </div>
                    <div className="subCommonClass">
                        <div className="subommonclasII">
                            <label>Qualification</label>

                            <label>10 th</label>
                            <input id="check" type="checkbox" onChange={(e)=>{setEdu({10:(e.target.checked)})}}/>
                            <label>12 th</label>
                            <input id="checkk" type="checkbox"  onChange={(e)=>{setEdu({12 :(e.target.checked)})}}/>
                            <label>Degree</label>
                            <input id="checkkk" type="checkbox"  onChange={(e)=>{setEdu({degree:(e.target.checked)})}}/>
                      {console.log({edu})}
                        </div>

                    </div>

                    <div className="subCommonClass">
                        <div className="subommonclasII">
                            <button onclick="saiVinay()">submit</button>
                        </div>

                    </div>






                </div>
            </div>
        </div>
    );
}

export default App;
