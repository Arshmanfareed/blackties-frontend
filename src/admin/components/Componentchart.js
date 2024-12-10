import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Componentchart = () => {
  const options = {
    animationEnabled: true,
    theme: "dark2",
	animationEnabled: true,
    title: {
      text: "Overall Mileage"
    },
    axisY: {
    //   title: "Capacity (in MWp)",

				// lineColor: "#4a068f",
				labelFontColor: "#667085",
    //   logarithmic: true
    },
	toolTip: {
		shared: true
	},
    data: [
      {
        type: "spline",
		
		lineColor: "#4a068f",
		tickColor: "#fff",
		name: "Miles",
        // showInLegend: true,	
		// xValueFormatString: "MMM YYYY",
				// yValueFormatString: "#,##0 Units",
        // legendText: "MWp = one megawatt peak",
		indexLabelFontColor: "#5A5757",
		dataPoints: [
			{ x: new Date(2017, 0, 1), y: 120 },
			{ x: new Date(2017, 1, 1), y: 135 },
			{ x: new Date(2017, 2, 1), y: 144 },
			{ x: new Date(2017, 3, 1), y: 103 },
			{ x: new Date(2017, 4, 1), y: 93 }
		]
      }
    ]
  };

  return <CanvasJSChart options={options} />;
};

export default Componentchart;
