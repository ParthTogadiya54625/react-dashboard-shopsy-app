import React from 'react'
import { AccumulationChartComponent, AccumulationDataLabel, AccumulationLegend, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationTooltip, Inject, PyramidSeries } from '@syncfusion/ej2-react-charts';

import { Header } from '../../components';
import { PyramidData } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider';

const Pyramid = () => {
  const {currentMode} = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Pyramid" title="Caleries in Foods" /> 
      <AccumulationChartComponent
        height='420px'
        legendSettings={{ position:"Bottom" }}
        tooltip={{ enable : true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[ PyramidSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip ]}/>
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective type='Pyramid' dataSource={PyramidData} xName='x' yName='y' dataLabel={{ visible: "true", name : "text", position :"Inside" }}>
          </AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  )
}

export default Pyramid