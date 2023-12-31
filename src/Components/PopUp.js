import React, { Component } from 'react';
import { Modal, } from 'antd';
// import './FlightList.css';
import './FormS.css';
import BookTicket from './BookTicket';

// const validateMessages = {
//   // eslint-disable-next-line no-template-curly-in-string
//   required: '${label} is required!',
//   types: {
//     // eslint-disable-next-line no-template-curly-in-string
//     email: '${label} is not a valid email!',
//     // eslint-disable-next-line no-template-curly-in-string
//     number: '${label} is not a valid number!',
//   },
//   number: {
//     // eslint-disable-next-line no-template-curly-in-string
//     range: '${label} must be between ${min} and ${max}',
//   },
// };

class PopUp extends Component {

  state = {
    loading: false,
    visible: false,
    checkBook: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (event) => {
    event.user.source = this.props.data.From;
    event.user.destination = this.props.data.To;
    const value = event.user.travelclass;
    if (value === 'Ekonomik') {
      event.user.price = this.props.data.AvgPrice;
    } else if (value === 'Premium Ekonomik') {
      event.user.price = this.props.data.AvgPrice + 2000;
    } else if (value === 'Business') {
      event.user.price = this.props.data.AvgPrice + 5000;
    } else {
      event.user.price = this.props.data.AvgPrice + 1000;
    }
    console.log(event.user)

    this.setState({ loading: true, checkBook: true });

    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 1000);
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };


  render() {
    const { visible, } = this.state;
    const bookButton = this.state.checkBook ? 'Booked' : 'Rezervasyon'

    return (
      <>
        <button onClick={this.showModal} >
          {bookButton}</button>
        <Modal
          visible={visible}
          title={"Rezervasyon: " + this.props.data.name}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <BookTicket data={this.props.data} okclicked={this.handleOk} cancelclicked={this.handleCancel} />
        </Modal>
      </>
    );
  }
}
export default PopUp