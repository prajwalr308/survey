import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import {connect} from 'react-redux';
import * as actions from '../../actions';

import {
   Button
  
  } from "react-bootstrap";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Survey"
        description="1 for 1 credit"
        amount={100}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
          <Button variant="primary">Add Credits</Button>{' '}
          </StripeCheckout>
    );
  }
}

export default connect(null,actions) (Payments);
