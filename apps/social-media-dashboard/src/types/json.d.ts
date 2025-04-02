declare module '*.json' {
  const value: {
    // Analytics data types
    metrics?: Array<{
      metric: string;
      value: number;
      target: number;
      unit: string;
    }>;
    audience?: Array<{
      category: string;
      percentage: number;
      trend: 'up' | 'down' | 'stable';
    }>;

    // Dashboard data types
    stats?: Array<{
      platform: string;
      followers: number;
      engagement: number;
      posts: number;
    }>;
    activities?: Array<{
      title: string;
      platform: string;
      time: string;
      type: 'post' | 'comment' | 'like';
    }>;
    topics?: Array<{
      title: string;
      mentions: number;
      sentiment: 'positive' | 'neutral' | 'negative';
    }>;
  };
  export default value;
} 