import React from 'react';
import { Layout, Menu } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import styles from './index.less'

import { Link, IRouteComponentProps } from 'umi'

export default ({ children, location, route, history, match }: IRouteComponentProps) => {

    return (
      <>
        <Layout>
          <Header>
            <div className={styles.logo} />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Link to="/">首页</Link>
                </Menu.Item>
                {/* <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item> */}
            </Menu>
          </Header>
          <Content className={styles.content}>
            <div className={styles.container}>
              { children }
            </div>
          </Content>
          {/* <Footer>Footer</Footer> */}
        </Layout>      
      </>
    )
}