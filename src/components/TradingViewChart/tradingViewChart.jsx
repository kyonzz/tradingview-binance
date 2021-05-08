import { useEffect, useRef } from "react";
import { widget } from "../../scripts/charting_library/charting_library.esm";
import BinanceAPI from "../../services/api";

export function getLocalLanguage() {
  return "en";
  return navigator.language.split("-")[0] || "en";
}

export const options = {
  locale: getLocalLanguage(),
  debug: false,
  fullscreen: false,
  autosize: false,
  symbol: "BTCUSDT",
  interval: "60", // '1', '3', '5', '15', '30', '60', '120', '240', '360', '480', '720', '1D', '3D', '1W', '1M'
  theme: "Dark",
  allow_symbol_change: true,
  width: 1000,
  height: 500,
  loading_screen: { backgroundColor: "#f2f2f2", foregroundColor: "#f0f0f0" },
};

const TradingViewChart = () => {
  const tradingViewWidget = useRef(null);

  useEffect(() => {
    const bfAPI = new BinanceAPI({ debug: false });

    const widgetOptions = {
      container_id: "chart",
      datafeed: bfAPI,
      library_path: "../../scripts/charting_library/",
      ...options,
    };

    tradingViewWidget.current = new widget(widgetOptions);

    tradingViewWidget.current.onChartReady(async () => {
      const studyId = await tradingViewWidget.current
        .chart()
        .createStudy("Moving Average", false, false, [10]);

      tradingViewWidget.current.chart().selection().add(studyId);

      const studyId2 = await tradingViewWidget.current
        .chart()
        .createStudy("Moving Average", true, false, [29]);

      tradingViewWidget.current.chart().selection().add(studyId2);
    });
  }, []);
  return <div id="chart"></div>;
};

export default TradingViewChart;
