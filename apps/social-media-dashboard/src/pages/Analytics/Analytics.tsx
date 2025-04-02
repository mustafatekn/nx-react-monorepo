import { FC } from 'react';
import { Card, Progress, Container } from '@ui-library';
import styles from './Analytics.module.scss';
import data from './analytics.data.json';

const Analytics: FC = () => {
  const { metrics, audience } = data;

  const calculateProgress = (value: number, target: number) => {
    return Math.min((value / target) * 100, 100);
  };

  return (
    <Container>
      <div className={styles.grid}>
        {metrics.map((data) => (
          <Card key={data.metric} className={styles.card}>
            <h3 className={styles.metricTitle}>{data.metric}</h3>
            
            <div className={styles.metricValue}>
              {data.value}
              <span className={styles.metricUnit}>{data.unit}</span>
            </div>

            <div className={styles.progressContainer}>
              <Progress 
                value={calculateProgress(data.value, data.target)} 
                max={100}
                color="#1976d2"
              />
              <div className={styles.targetLabel}>Target: {data.target} {data.unit}</div>
            </div>
          </Card>
        ))}
      </div>

      <div className={styles.contentGrid}>
        <Card className={styles.performanceChart}>
          <h3 className={styles.chartTitle}>Performance Over Time</h3>
          <div className={styles.chartPlaceholder}>
            Performance Chart will be displayed here
          </div>
        </Card>

        <Card className={styles.audienceInsights}>
          <h3 className={styles.chartTitle}>Audience Demographics</h3>
          {audience.map((insight, index) => (
            <div key={index} className={styles.insightItem}>
              <h4 className={styles.insightTitle}>{insight.category}</h4>
              <div className={styles.insightValue}>
                {insight.percentage}% {insight.trend}
              </div>
            </div>
          ))}
        </Card>
      </div>
    </Container>
  );
}; 

export default Analytics;