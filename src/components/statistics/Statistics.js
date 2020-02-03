import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import StatisticField from './StatisticField';

function Statistics({ title, stats }) {
  const { statistics, statTitle } = styles;

  return (
    <section className={statistics}>
      {title && <h2 className={statTitle}>{title}</h2>}
      <StatisticField stats={stats} />
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
