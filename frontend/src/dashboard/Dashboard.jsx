import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from '../common/template/Content';
import ContentHeader from '../common/template/ContentHeader';



class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title='Dashboard' small='Versão 1.0' />
        <Content >
          DashBoard
        </Content>
      </div>
    );
  }
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = () => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);