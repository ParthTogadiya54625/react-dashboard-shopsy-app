import React from 'react'
import { AccumulationChartComponent, AccumulationDataLabel, AccumulationLegend, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationTooltip, Inject, PieSeries } from '@syncfusion/ej2-react-charts';

import { Header } from '../../components';
import { pieChartData } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider';


const Pie = () => {
  const {currentMode} = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Pie" title="Bar Chart" /> 
      <AccumulationChartComponent
        // height='420px'
        legendSettings={{ position:"Bottom" }}
        tooltip={{ enable : true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[ PieSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip ]}/>
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective type='Pie' dataSource={pieChartData} innerRadius="50%" xName='x' yName='y' dataLabel={{ visible: "true", name : "text", position :"Inside" }}>
          </AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  )
}

export default Pie