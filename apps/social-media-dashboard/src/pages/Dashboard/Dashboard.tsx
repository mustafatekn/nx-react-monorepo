import { FC } from 'react';
import { Card, Container } from '@ui-library';
import styles from './Dashboard.module.scss';
import data from './dashboard.data.json';

const Dashboard: FC = () => {
  const { stats, activities, topics } = data;

  return (
    <Container>
      <div className={styles.statsGrid}>
        {stats.map((stat) => (
          <Card key={stat.platform} className={styles.statCard}>
            <h3 className={styles.statTitle}>{stat.platform}</h3>
            <div className={styles.statValue}>{stat.followers.toLocaleString()}</div>
            <div className={styles.statLabel}>Followers</div>
            
            <div className={styles.statValue}>{stat.engagement}%</div>
            <div className={styles.statLabel}>Engagement Rate</div>
            
            <div className={styles.statValue}>{stat.posts}</div>
            <div className={styles.statLabel}>Total Posts</div>
          </Card>
        ))}
      </div>

      <div className={styles.contentGrid}>
        <Card className={styles.recentActivity}>
          <h3>Recent Activity</h3>
          {activities.map((activity, index) => (
            <div key={index} className={styles.activityItem}>
              <h4 className={styles.activityTitle}>{activity.title}</h4>
              <div className={styles.activityMeta}>
                {activity.platform} • {activity.time}
              </div>
            </div>
          ))}
        </Card>

        <Card className={styles.trendingTopics}>
          <h3>Trending Topics</h3>
          {topics.map((topic, index) => (
            <div key={index} className={styles.topicItem}>
              <h4 className={styles.topicTitle}>{topic.title}</h4>
              <div className={styles.topicMeta}>
                {topic.mentions.toLocaleString()} mentions • {topic.sentiment}
              </div>
            </div>
          ))}
        </Card>
      </div>
    </Container>
  );
}; 

export default Dashboard;