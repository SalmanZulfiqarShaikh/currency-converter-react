import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    const controller = new AbortController();

    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`,
      { signal: controller.signal }
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency.toLowerCase()]);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error("Currency API Error:", err);
        }
      });

    // cleanup if component unmounts or currency changes
    return () => controller.abort();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
