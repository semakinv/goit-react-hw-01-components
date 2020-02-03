import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticField.module.css';
import styled from 'styled-components';
import generatedColor from './ColorGenerator';

function StatisticField({ stats }) {
  const { statList, percentage, label, item } = styles;
  const Listitem = styled.li`
    background-color: ${generatedColor};
  `;
  return (
    <ul className={statList}>
      {stats.map(stat => (
        <Listitem key={stat.id} className={item}>
          <span className={label}>{stat.label}</span>
          <span className={percentage}>{stat.percentage}</span>
        </Listitem>
      ))}
    </ul>
  );
}
StatisticField.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default StatisticField;
