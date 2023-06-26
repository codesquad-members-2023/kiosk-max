import React, { useState } from "react";

function CashForm() {
  const [receivedAmount, setReceivedAmount] = useState<number>(0);

  const totalAmount = 10000;
  const cashOptions = [500, 1000, 5000, 10000];

  return (
    <form>
      <input
        className="blind"
        type="number"
        name="amount"
        id="receivedAmount"
        value={receivedAmount}
        onChange={(e) => {
          setReceivedAmount(Number(e.target.value));
        }}
      />
      <div>
        {cashOptions.map((cashOption) => (
          <button
            key={cashOption}
            type="button"
            onClick={(e) => {
              const button = e.target as HTMLElement;
              const input = button.closest("input")!;
              input.value = (receivedAmount + cashOption).toString();
            }}>
            {cashOption}원
          </button>
        ))}
      </div>
      <p>
        <strong>주문금액:</strong> {totalAmount}
      </p>
      <p>
        <strong>투입금액:</strong>
        {receivedAmount}
      </p>

      <button type="submit">현금결제하기</button>
    </form>
  );
}

export default CashForm;
