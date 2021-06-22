import React, { useContext, useEffect } from 'react';
import { LayoutContainer } from '../../common/';
import NavBar from '../../common/NavBar';
import Tabs from '../../common/Tabs';
import './Alerts.css';
import { Layout } from 'antd';
import NavMenu from '../../common/NavMenu';
import { AdminContext } from '../../../state/contexts';
import { getClubs, getMembersReaction } from '../../../state/actions';
import { LoadingComponent } from '../../common';
import '../../../styles/styles.css';

const { Content, Sider } = Layout;

function RenderAlerts(props) {
  const context = useContext(AdminContext);

  useEffect(() => {
    if (context.clubs.length === 0) {
      getClubs('authState', context);
    }
    if (context.memberReactions.length === 0) {
      getMembersReaction('authState', context);
    }
  }, []);

  return (
    <LayoutContainer>
      <NavBar titleName={'Alerts'} backgroundColor="#293845" />
      <Layout>
        <Sider width={230} className="navSider">
          <NavMenu />
        </Sider>
        <Content>
          {context.clubs.length === 0 ? (
            <div className="centered-content flex">
              <LoadingComponent message="loading" />
            </div>
          ) : (
            <Tabs>
              {context.clubs.map(club => (
                <div label={club.clubname} key={club.clubid}>
                  <div className="under-tabs-container" key={club.clubid}>
                    <div className="flags box">
                      <h2>Negative Sentiment</h2>
                    </div>
                    <div className="insights box">
                      <h2>Insights</h2>
                    </div>
                  </div>
                </div>
              ))}
            </Tabs>
          )}
        </Content>
      </Layout>
    </LayoutContainer>
  );
}
export default RenderAlerts;
