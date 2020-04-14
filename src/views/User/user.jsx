import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import routes from '../../routes'
import style from './index.less'
import menuList from '../../utils/menuconfig'

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

// console.log(routes)

export default class User extends Component {
  state = {
    collapsed: false,
  };

  componentWillMount() {
    const menuTreeNode = this.renderMenu(menuList);

    this.setState({
      menuTreeNode
    })
  }
  //菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}><span>{item.title}</span></Menu.Item>
    })
  }
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  onMenuClick = ({ item, key, keyPath, domEvent }) => {
    this.props.history.push(key)
  }


  render() {
    const isLogin = window.localStorage.getItem('user')
    return (
      isLogin ?
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className={style.logo}></div>
            <Menu theme="dark" mode="inline" onClick={this.onMenuClick} defaultSelectedKeys={['/user/page1']}>
              {
                this.state.menuTreeNode
              }
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', paddingLeft: '16px' }}>后台框架React版</Header>
            <Content style={{ margin: '0 16px' }}>
              <Switch>
                {
                  routes.map(item => {
                    return (
                      <Route
                        key={item.key}
                        path={item.path}
                        render={(props) => {
                          return <item.component {...props} route={item} />
                        }}
                      >
                      </Route>
                    )
                  })
                }
                <Redirect to='/user/page1' from='/user' exact />
              </Switch>
            </Content>
            <Footer style={{ textAlign: 'center', backgroundColor: '#fff' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout> :
        <Redirect to='/login' />
    )
  }
}
