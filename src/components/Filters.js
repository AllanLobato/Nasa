import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

import Checkbox from '../components/Checkbox';
import CheckboxList from '../components/CheckboxList';
import Slider from '../components/Slider';

const useStyles = makeStyles({
  drawerPaper: {
    paddingLeft: '40px',
    paddingRight: '40px',
    width: '340px',
  },
});

const App = () => {
  const [activeFilters, setActiveFilters] = useState(false);
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  const classes = useStyles();

  let inputs = [];

  activeFilters.forEach((activeFilter) => {
    const {
      dataType,
      values,
      name,
      tableLabel,
      minValue,
      maxValue,
      unit,
      scaleStep,
      currentMinValue,
      currentMaxValue,
    } = activeFilter;

    if (dataType === 'text') {
      let checkboxes = values.map((value, index) => (
        <Checkbox
          key={index}
          value={value}
          activeFilter={activeFilter}
          setActiveFilters={setActiveFilters}
        />
      ));

      inputs.unshift(
        <CheckboxList
          key={name + '_label'}
          tableLabel={tableLabel}
          name={name}
          checkboxes={checkboxes}
          setActiveFilters={setActiveFilters}
        />,
      );
    } else if (dataType === 'number') {
      inputs.push(
        <Slider
          key={name + '_label'}
          setActiveFilters={setActiveFilters}
          currentMinValue={currentMinValue}
          currentMaxValue={currentMaxValue}
          scaleStep={scaleStep}
          minValue={minValue}
          maxValue={maxValue}
          name={name}
          unit={unit}
          tableLabel={tableLabel}
        />,
      );
    }
  });

  return (
    <Drawer
      anchor="left"
      open={isSidebarOpened}
      onClose={() => {
        setIsSidebarOpened(!isSidebarOpened);
      }}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      {inputs}
    </Drawer>
  );
};

export default App;
