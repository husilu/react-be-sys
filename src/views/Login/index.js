import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import './index.less';
import { Form, Icon, Input, Button } from 'antd';

@Form.create()
class Login extends Component {
  handleSubmit = e => {
    // 提交
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        window.localStorage.setItem('user', values.username);
        this.props.history.push({
          pathname: '/user'
        })
      }
    });
  };
  render() {
    const isLogin = window.localStorage.getItem('user')
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      // labelCol: { span: 4 },
      // wrapperCol: { span: 24 },
    }
    return (
      isLogin ? <Redirect to='/user' /> : <div className='login-wrap'>
        <div className='login-modal'>
          <div className='login-header'>登陆框</div>
          <div className='login-content'>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item {...formItemLayout}>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="用户名"
                  />,
                )}
              </Form.Item>
              <Form.Item  {...formItemLayout}>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="密码"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" style={{width:'100%'}}>
                  登陆
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login