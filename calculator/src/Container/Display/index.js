import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from '../../Component/Button';
import './style.css';
let num1=0,flag=1,res=0,sign;
export default class Display extends Component {
    constructor() {
        super();
        this.state = {
            result: 0
        };
        this.evaluate = this.evaluate.bind(this);
    }
    evaluate(e) {
        let value = e.target.value;
        if((value === '1' || value==='2' || value === '3' || value === '4' || value === '5' || value === '6' || value === '7' || value === '8' || value === '9' || value === '0' || value === '.')) {
            num1 = num1+value;
            this.setState({
                result : num1
            });
        }
        else if(value === "AC") {
            num1=0;
            res = 0;
            flag=1;
            sign="";
            this.setState({
                result: 0
            });
        }
        else if(value === "C") {
            num1 = Number(num1);
            let remove = num1%10;
            num1 = (num1 - remove)/10;
            this.setState({
                result : num1
            });
        }
        else if(value === "=") {
            num1 = Number(num1);
            if(sign === "+") {
                res= res+num1;
            }
            else if(sign === "-") {
                res = (res-num1);
            }
            else if(sign === '/') {
                res = (res/num1);
            }
            else if(sign === '*') {
                res =(res*num1);
            }
            else if(sign === "sqrt") {
                res = Math.sqrt(num1);
            }
            else;
            this.setState({
                result :  res
            });
            num1 = 0;
        }
        else {
            num1 = Number(num1);
            if(flag === 1) {
                res = num1;
                flag = 0;
            }
            if(sign === "+") {
                res= res + num1;
                num1=0;
            }
            else if(sign === "-") {
                res = res-(num1);
                num1=0;
            }
            else if(sign === '/') {
                res = res / (num1);
                num1=0;
            }
            else if(sign === '*') {
                res = res * (num1);
                num1=0;
            }
            else;
            sign = value;
            if(sign === "%") {
                res = (res)/100;
                this.setState({
                    result :  res
                });
                num1 = 0;
                res=0;
            }
            num1 =0;
        }
    }
    render() {
        return(
            <div className="block">
                <h1 className="text-center">Calculator</h1>
                <div className="input_block">{this.state.result}</div>
                <div className="row">
                    <Base variant="secondary" text="AC" value="AC" click={this.evaluate} className="col"/>
                    <Base variant="secondary" text="C " value="C" click={this.evaluate} className="col"/>
                    <Base variant="secondary" text="% " value="%" click={this.evaluate} className="col"/>
                    <Base variant="secondary" text="/ " value="/" click={this.evaluate} className="col"/>
                </div>
                <div className="row">
                    <Base variant="secondary" text="7 " value="7" click={this.evaluate} className="col"/>
                    <Base variant="secondary" text="8 " value="8" click={this.evaluate} className="col"/>
                    <Base variant="secondary" text="9 " value="9" click={this.evaluate} className="col"/>
                    <Base variant="secondary" text="* " value="*" click={this.evaluate} className="col"/>
                </div>
                <div className="row">
                    <Base variant="secondary" text="4 " value="4" click={this.evaluate} className="col"/>
                    <Base variant="secondary" text="5 " value="5" click={this.evaluate} className="col"/>
                    <Base variant="secondary" text="6 " value="6" click={this.evaluate} className="col"/>
                    <Base variant="secondary" text="- " value="-" click={this.evaluate} className="col"/>
                </div>
                <div className="row">
                    <Base variant="secondary" text="1 " value="1" click={this.evaluate} className="col"/>
                    <Base variant="secondary" text="2 " value="2" click={this.evaluate} className="col"/>
                    <Base variant="secondary" text="3 " value="3" click={this.evaluate} className="col"/>
                    <Base variant="secondary" text="+ " value="+" click={this.evaluate} className="col"/>
                </div>
                <div className="row">
                    <Base variant="secondary" text="sqrt" value="sqrt" click={this.evaluate} className="col"/>
                    <Base variant="secondary" text="0 " value="0" click={this.evaluate} className="col"/>
                    <Base variant="secondary" text=". " value="." click={this.evaluate} className="col"/>
                    <Base variant="secondary" text="= " value="=" click={this.evaluate} className="col"/>
                </div>
            </div>
        );
    }
}