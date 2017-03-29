import React from 'react';
import _ from 'lodash';
import $ from 'jquery';


export default class Mymail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email:'',
      subject:'',
      email_content:''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    if(validateForm){
        //TODO send email
    }
  }

  onChange(e){
    this.setState({[e.target.name] : e.target.value});
  }

  render(){
    return(
      <div>
        <form id="contactForm" onSubmit={this.onSubmit}>
          <div class="form-group row">
                <label for="email" class="col-sm-2 col-form-label">Email*</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email" value={this.state.email} onChange={this.onChange}/>
                </div>
          </div>

          <div class="form-group row">
                <label for="subject" class="col-sm-2 col-form-label">Subject*</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="subject" name="subject" value={this.state.subject} onChange={this.onChange}/>
                </div>
          </div>

          <div class="form-group row">
                <label for="email_content" class="col-sm-2 col-form-label">Content*</label>
                <div class="col-sm-10">
                  <textarea class="form-control" id="email_content" name="email_content" value={this.state.email_content} onChange={this.onChange}/>
                </div>
          </div>

          <div class="form-group row">
            <div class="offset-sm-2 col-sm-10">
              <button type="submit" class="btn btn-primary pull-right">Send</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

// function validateEmail(email) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// }

function validateForm(state) {
  var isValid = true;
  _.map(_.keys(state), (k)=> {
    if(_.isEmpty(state[k])){
      isValid = false;
    }

  });
  return isValid;
}
