import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ClubRegistrationConfirmation from "./ClubRegistrationConfirmation";
import PaypalExpressBtn from "react-paypal-express-checkout";
import PaypalBtn from "react-paypal-checkout";
import { PayPalButton } from "react-paypal-button-v2";
import { Container } from "semantic-ui-react";

// const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

function ConfirmationPage(props) {
  //   console.log(props.location.state);
  console.log(props);

  console.log(props.location.state);

  const [numDogs, setNumDogs] = useState(
    props.location.state.clubRegistration.dogs.length
  );
  console.log(numDogs);
  const [price, setPrice] = useState();

  const userPays = price * numDogs;
  console.log(userPays);

  useEffect(() => {
    if (props.location.state.clubRegistration) {
      setPrice(15);
      console.log(price);
      // console.log("here");
    } else {
      //   setPrice(10);
    }
  }, []);

  const client = {
    sandbox: "YOUR-SANDBOX-APP-ID",
    production: "YOUR-PRODUCTION-APP-ID",
  };

  const handleSuccess = (data) => {
    console.log(data);
  };

  const handleNumDogs = (value) => {
    setNumDogs(value);
  };

  return (
    <div className="confirmation-page">
      {props.location.state.clubRegistration ? (
        <ClubRegistrationConfirmation
          handleNumDogs={handleNumDogs}
          data={props.location.state.clubRegistration}
        />
      ) : null}
      <div id="paypal-button-container"></div>
      {/* <PaypalExpressBtn client={client} currency={"USD"} total={1.0} /> */}
      {/* <PayPalButton
        createOrder={(data, actions) => this.createOrder(data, actions)}
        onApprove={(data, actions) => this.onApprove(data, actions)}
      /> */}
      {/* <PaypalBtn client={client} currency={"USD"} total={1.0} /> */}
      <Container>
        <PayPalButton
          style={{
            color: "blue",
            layout: "horizontal",
            shape: "pill",
            size: "25",
          }}
          amount={userPays}
          options={{
            clientId:
              "ARbGmjFABclmA7CwOIsCyDvk8n9cQjXipoZ_KL5oaTaj-Bz9jpTqYCFV_LTxT6qaHzQ7Vzf8N8shVscJ",
          }}
          // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
          onSuccess={(details, data) => {
            alert("Transaction completed by " + details.payer.name.given_name);
            handleSuccess(data);

            // OPTIONAL: Call your server to save the transaction
            //   return fetch("/paypal-transaction-complete", {
            //     method: "post",
            //     body: JSON.stringify({
            //       orderID: data.orderID,
            //     }),
            //   });
          }}
        />
      </Container>
    </div>
  );
}

export default ConfirmationPage;
