import React from "react";

function PaymentForm() {
  return (
    <>
      <div className="row">
        <span>💳</span>
        <button type="button">카드결제</button>
      </div>
      <div className="row">
        <span>💵</span>
        <button type="button">현금결제</button>
      </div>
    </>
  );
}

export default PaymentForm;
