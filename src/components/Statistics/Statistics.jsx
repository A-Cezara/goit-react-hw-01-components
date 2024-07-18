import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>Upload stats</h2>

    <ul className={styles['stat-list']}>
      <li className={styles.item} style={{ backgroundColor: getRandomColor() }}>
        <span className={styles.label}>.docx</span>
        <span className={styles.percentage}>4%</span>
      </li>
      <li className={styles.item} style={{ backgroundColor: getRandomColor() }}>
        <span className={styles.label}>.mp3</span>
        <span className={styles.percentage}>14%</span>
      </li>
      <li className={styles.item} style={{ backgroundColor: getRandomColor() }}>
        <span className={styles.label}>.pdf</span>
        <span className={styles.percentage}>41%</span>
      </li>
      <li className={styles.item} style={{ backgroundColor: getRandomColor() }}>
        <span className={styles.label}>.mp4</span>
        <span className={styles.percentage}>12%</span>
      </li>
    </ul>
  </section>
);

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

export default Statistics;