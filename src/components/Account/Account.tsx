import React, { PureComponent } from 'react';
import './Account.css';
import Input from 'Components/Input';
import Button from 'Components/Button';
import LinkButton from 'Components/LinkButton';
import UserIcon from 'Components/UserIcon';
import Delimiter from 'Components/Delimiter';
import Alert from 'Components/Alert';
import cn from 'Utils/classnames';
import successIconPath from 'Images/success-icon.svg';
import {AccountAlertState as AlertState} from "./types";

export default class App extends PureComponent {
  state = {
      showPassword: false,
      alertState: AlertState.none
    };

  render() {
      const { showPassword, alertState } = this.state;

      return (
        <div className="account__widjet">
          <aside className={cn('account__alert', {
            account__alert_hidden: alertState === AlertState.none,
            })}>
            <Alert
              icon = {successIconPath}
              onClick={this.handleAlertClick}>
              {alertState === AlertState.success? "Saved": "Error" }
            </Alert>
          </aside>
          <div className="account__header">
            <LinkButton>{"< Back"}</LinkButton>
            <UserIcon name="igor" url="https://picsum.photos/200" hasChange />
            <LinkButton>Log out</LinkButton>
          </div>
          <form className="account_main">
            <div className="account__fields">
              <Input labelText="username" />
              <Input labelText="first name" />
              <Input labelText="e-mail" />
              <Input labelText="last name" />
              <Input labelText="phone #"/>
              <Input labelText="display name"/>
            </div>
            <Delimiter/>
            <div className={cn('account__fields', {
              account__fields_hidden: !showPassword,
              })}>
              <Input labelText="old password" />
              <Input labelText="new password" />
            </div>
            <div  className="account__password_link">
              <LinkButton onClick={this.handlePasswordClick}>
                {showPassword? "Do not change password": "Change password"}
              </LinkButton>
            </div>
            <div className="account__save_button">
              <Button  onClick={this.handleSaveClick} >Save changes</Button>
            </div>
          </form>
        </div>
    );
  }

  handlePasswordClick = ()=>{
    this.setState({showPassword:!this.state.showPassword});
  }

  handleSaveClick = ()=>{
    this.setState({alertState:AlertState.success});
  }

  handleAlertClick = ()=>{
    this.setState({alertState:AlertState.none});
  }

}
