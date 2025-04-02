import { FC } from 'react';
import { Card, Input, Button, Container } from '@ui-library';
import styles from './Settings.module.scss';

const Settings: FC = () => {
  return (
    <Container>
      <Card className={styles.card}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Company Name</label>
          <Input placeholder="Enter company name" />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Email Notifications</label>
          <Input type="email" placeholder="Enter email for notifications" />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Posting Schedule</label>
          <Input type="time" />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Default Post Template</label>
          <Input as="textarea" rows={4} placeholder="Enter default post template" />
        </div>

        <div className={styles.buttonGroup}>
          <Button variant="secondary">Reset</Button>
          <Button variant="primary">Save Changes</Button>
        </div>
      </Card>
    </Container>
  );
};

export default Settings;