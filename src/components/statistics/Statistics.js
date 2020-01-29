import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import styled from 'styled-components';
import generatedColor from './ColorGenerator';

function Statistics({ title, stats }) {
  const { statistics, statList, percentage, statTitle, label, item } = styles;
  const Listitem = styled.li`
    background-color: ${generatedColor};
  `;
  return (
    <section className={statistics}>
      {title && <h2 className={statTitle}>{title}</h2>}
      <ul className={statList}>
        {stats.map(stat => (
          <Listitem key={stat.id} className={item}>
            <span className={label}>{stat.label}</span>
            <span className={percentage}>{stat.percentage}</span>
          </Listitem>
        ))}
      </ul>
    </section>
  );
}

Statistics.defaultProps = {
  title: 'Upload stats',
};

Statistics.propTypes = {
  title: PropTypes.string,

  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
