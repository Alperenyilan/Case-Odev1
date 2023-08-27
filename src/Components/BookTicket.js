/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { DatePicker, Button, Form, Select } from 'antd';
import './Bookflight.css';
import './FormS.css';
import plane from './plane.png';

import { Link } from 'react-router-dom';

function disabledDate(current) {
    // Can not select days before today and today
    return current && current.valueOf() < Date.now();
}

const { Option } = Select;


const validateMessages = {
    // eslint-disable-next-line no-template-curly-in-string
    required: '${label} is required!',
    types: {
        // eslint-disable-next-line no-template-curly-in-string
        email: '${label} is not a valid email!',
        // eslint-disable-next-line no-template-curly-in-string
        number: '${label} is not a valid number!',
    },
    number: {
        // eslint-disable-next-line no-template-curly-in-string
        range: '${label} must be between ${min} and ${max}',
    },
};

class BookTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {

            data: props.data,
            fprice: props.data.price,
            cName: '',
            cMail: '',
            cMob: '',
            cSex: '',
            tripway: false,
            class: '',
            fdate: '',
        }

    }
    updatecname(event) {
        this.setState({
            cName: event.target.value,
        });
    }
    updatecmail(event) {
        this.setState({
            cMail: event.target.value,
        });
    }
    updatecage(event) {
        this.setState({
            cSex: event.target.value,
        });
    }
    updatecmob(event) {
        this.setState({
            cMob: event.target.value,
        });
    }
    oneWayButtonHandler = () => {
        this.setState({
            tripway: false
        })
    }
    roundTripButtonHandler = () => {
        this.setState({
            tripway: true

        })
    }
    priceHandler = (value) => {
        console.log(value);
        this.setState({ class: value });
        let fltPrice = this.state.fprice;
        let fp = parseInt(fltPrice, 10);

        if (value === 'Economy') {
            this.setState({ fprice: fp })
        } else if (value === 'Premium Economy') {
            this.setState({ fprice: fp + 2000 })
        } else if (value === 'Business') {
            this.setState({ fprice: fp + 5000 })
        } else {
            this.setState({ fprice: fp + 10000 })
        }
    }

    onChanges = (date, dateString) => {
        console.log({ date, dateString });
        console.log(dateString);
        this.setState({ fdate: dateString });
    }
    render() {
        let fltPrice = this.state.fprice;
        let fp = parseInt(fltPrice, 10);
        let gst = fp * 0.18;
        let sTax = fp * 0.10;
        let finalPrice = fp + gst + sTax;
        let oneWayTypeStyle = this.state.tripway ? 'dashed' : 'primary';

        let roundTripTypeStyle = this.state.tripway ? 'primary' : 'dashed';

        return (
            <div className="maindivbooking">
                <div className="inner_cont_div_fromto">
                    <h1 className="from_flt">{this.props.data.from}</h1>
                    <img className="flightlogo" src={plane}></img>
                    <h1 className="from_flt">{this.props.data.to}</h1>
                </div>
                <div className="roundbtndiv">
                    <Button type={oneWayTypeStyle} onClick={this.oneWayButtonHandler} >Tek Yön</Button>
                    <Button type={roundTripTypeStyle} onClick={this.roundTripButtonHandler}>Gidiş-Dönüş</Button>
                </div>
                <Form name="nest-messages" onFinish={this.props.okclicked} validateMessages={validateMessages}>

                    <Form.Item

                        label="İsim"
                        rules={[
                            {
                                type: 'text',
                                required: true,
                            },
                        ]}
                    >
                        <input
                            value={this.state.cname}
                            onChange={this.updatecname.bind(this)}
                            placeholder="İsminizi Giriniz "
                        />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        rules={[
                            {
                                type: 'email',
                                required: true,
                            },
                        ]}
                    >
                        <input
                            value={this.state.cMail}
                            onChange={this.updatecmail.bind(this)}
                            placeholder="Emailinizi giriniz"
                        />

                    </Form.Item>
                    <Form.Item
                        label="Tel No"
                        rules={[
                            {
                                type: 'number',
                                required: true,
                            },
                        ]}
                    >
                        <input
                            value={this.state.cMob}
                            onChange={this.updatecmob.bind(this)}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Cinsiyet"
                        rules={[
                            {
                                type: 'text',
                                min: 0,
                                max: 99,
                                required: true,
                            },
                        ]}
                    >
                        <input
                            value={this.state.cSex}
                            onChange={this.updatecage.bind(this)}
                        />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'departure']}
                        label="Kalkış"
                        rules={[
                            {
                                type: 'object',
                                required: true,
                            },
                        ]}
                    >
                        <DatePicker disabledDate={disabledDate} onChange={(date, dateString) => this.onChanges(date, dateString)} />
                    </Form.Item>

                    {
                        this.state.tripway ? <Form.Item
                            name={['user', 'departure']}
                            label="Return"
                            rules={[
                                {
                                    type: 'object',
                                    required: true,
                                },
                            ]}
                        >
                            <DatePicker disabledDate={disabledDate} onChange={(date, dateString) => this.onChanges(date, dateString)} />
                        </Form.Item> : null
                    }
                    <Form.Item
                        name={['user', 'travelclass']}
                        label="Seyahat Sınıfı"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select onSelect={this.priceHandler}>
                            <Option value='Economy'>Ekonomik</Option>
                            <Option value='Premium Economy'>Premium Ekonomik</Option>
                            <Option value='Business'>Business</Option>
                            <Option value='First'>First Class</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name={['user', 'price']}
                        label="Ücret"
                        rules={[
                            {
                                type: 'number'
                            },
                        ]}
                    >
                        {"Toplam: " + fp}
                    </Form.Item>
                    <Form.Item
                        name={['user', 'price']}
                        label="Vergi: 18%"
                        rules={[
                            {
                                type: 'number'
                            },
                        ]}
                    >
                        {"Toplam: " + gst}
                    </Form.Item>
                    <Form.Item
                        name={['user', 'price']}
                        label="Vergi 10%"
                        rules={[
                            {
                                type: 'number'
                            },
                        ]}
                    >
                        {"Toplam: " + sTax}
                    </Form.Item>
                    <Form.Item
                        name={['user', 'price']}
                        label="Vergi  10%"
                        rules={[
                            {
                                type: 'number'
                            },
                        ]}
                    >
                        {"Toplam: " + finalPrice}
                    </Form.Item>
                    <Form.Item className='Book-submit' >
                        <Button className='cancel-button' onClick={this.props.cancelclicked}>İptal Et</Button>

                        <Link to={{
                            pathname: '/BookedTicket',
                            tProps: {
                                tdata: this.state,
                            }
                        }} className="payBtn"
                        >  <Button htmlType="submit" className="payBtn">Şimdi Öde!  </Button></Link>

                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default BookTicket