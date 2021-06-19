import React from 'react'
import Chart from "react-google-charts";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  pieChart: {
    marginTop: theme.spacing(2),  
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function CardPieChart() {

  const classes = useStyles();

  return (
    <div>
      <Chart className={classes.pieChart}
        width={'430px'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Pizza', 'Popularity'],
          ['Resolved', 40],
          ['In Progress', 25],
          ['Unresolved', 35],
        ]}
        options={{
          title: 'Grievance Response Status',
          sliceVisibilityThreshold: 0.2, // 20%
        }}
        rootProps={{ 'data-testid': '7' }}
      />
    </div>
  )
}


