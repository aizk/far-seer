import React from 'react';
import styles from './index.less';
import { Link } from 'umi';
import { Tabs, Divider } from 'antd';

const categories = [
  {
    tabName: 'React Official',
    routes: [
      {
        name: '官方教程',
        path: '/official/tutorial'
      },
      {
        name: '官方教程',
        path: '/official/tutorial'
      },
    ]
  },
  {
    tabName: 'CSS',
    routes: []
  },
]

export default () => {
  return (
    <div className={styles.routes}>
      <Tabs>
        {categories.map((cate) => {
            return (
              <Tabs.TabPane tab={cate.tabName} key={cate.tabName}>
                {cate.routes.map((route) => {
                  return (
                    <>
                      <Link to={route.path}>{ route.name }</Link>
                      <Divider type="vertical" />
                    </>
                    )
                })}
              </Tabs.TabPane>
            )
        })}
      </Tabs>

      {/* <Link to="/browser/scroll">Scroll</Link> */}
      {/* <Link to="/browser/cssom">CSSOM offset、client、scroll 系列</Link> */}
    </div>
  );
}
