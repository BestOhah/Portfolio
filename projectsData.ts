import { Users, TrendingUp, Database, Target, BarChart3, Fuel as Funnel, TestTube, DollarSign } from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  impact: string;
  tools: string[];
  icon: any;
  color: string;
  links: {
    demo: string;
    github: string;
    case: string;
  };
  details?: {
    objective: string;
    methodology: string;
    outcome: string;
    visuals?: {
      description: string;
      findings: string[];
    };
    dashboardImages?: {
      page1: string;
      page2: string;
      description: string;
    };
    sqlImplementation?: {
      sections: {
        title: string;
        description: string;
        query: string;
        breakdown: {
          title: string;
          description: string;
          color: string;
        }[];
      }[];
    };
  };
}

export const projectsData: ProjectData[] = [
  {
    id: 'sales-funnel-analysis',
    title: 'Sales Funnel Analysis',
    description: 'Analyzed user interactions from raw events data to create meaningful sales funnel charts highlighting the user journey from initial website visit to checkout. Focused on eliminating duplicate events and providing insights into user behavior across top three countries.',
    impact: 'Identified key drop-off points and improved conversion rates',
    tools: ['SQL', 'Google BigQuery', 'Funnel Analysis'],
    icon: Funnel,
    color: 'purple',
    links: {
      demo: '#',
      github: '#',
      case: '#'
    },
    details: {
      objective: 'To analyze user interactions captured in the raw_events table and create a meaningful sales funnel chart that highlights the user journey from initial website visit to checkout. The analysis aims to identify key events in the sales process, eliminate duplicate events, and provide insights into user behavior across the top three countries based on event frequency.',
      methodology: 'Data familiarization through querying the raw_events table, eliminating duplicate events by retaining only the first occurrence per user, identifying 4-6 key events crucial for sales funnel analysis, aggregating data by key events split by top three countries, and creating funnel charts to visualize drop-off at each stage.',
      outcome: 'The project provided a clear and actionable sales funnel analysis, highlighting user behavior and retention at each stage of the sales process. This helped the business understand where users drop off and identify opportunities to improve the conversion rate, with detailed insights into user behavior differences across the top three countries.',
      visuals: {
        description: 'The funnel analysis revealed consistent patterns across all three regions with key insights:',
        findings: [
          'The drop-off rates are remarkably similar across all three regions, suggesting that the e-commerce funnel faces consistent challenges globally.',
          'Canada performs slightly better in the transition from Add Payment Info to Purchase, indicating potentially more user-friendly payment processes or fewer barriers to completing the purchase.',
          'The most significant drop-off occurs at the Add Payment Info stage across all regions, which is a critical area to investigate and optimize.'
        ]
      },
      sqlImplementation: {
        sections: [
          {
            title: 'UNIQUE EVENTS',
            description: 'Eliminating duplicate events by retaining only the first occurrence of each event type per user.',
            query: `-- CTE: ranked_events
WITH ranked_events AS (
  SELECT
    user_pseudo_id,
    event_timestamp AS timestamp,
    event_name,
    country,
    ROW_NUMBER() OVER (PARTITION BY user_pseudo_id, 
    event_name ORDER BY event_timestamp ASC) AS rank
  FROM
    \`turing_data_analytics.raw_events\`
)

-- Final Query
SELECT
  user_pseudo_id,
  timestamp,
  event_name,
  country
FROM
  ranked_events
WHERE
  rank = 1
ORDER BY
  timestamp, event_name DESC;`,
            breakdown: [
              {
                title: 'ranked_events CTE',
                description: 'Creates a temporary result set with ROW_NUMBER() function to assign unique ranks to each event for each user, partitioned by user_pseudo_id and event_name, ordered by event_timestamp ASC.',
                color: 'blue'
              },
              {
                title: 'ROW_NUMBER() Function',
                description: 'Assigns a unique rank to each event for each user. The earliest event for each user_pseudo_id and event_name combination gets a rank of 1.',
                color: 'green'
              },
              {
                title: 'Final Query Filter',
                description: 'Filters results to include only rows where rank = 1, ensuring only the first occurrence of each event type for each user is included.',
                color: 'purple'
              }
            ]
          },
          {
            title: 'TOP 3 COUNTRIES',
            description: 'Identifying the top 3 countries based on event frequency and analyzing funnel performance by country.',
            query: `-- Creating the top_countries CTE
top_countries AS (
  SELECT
    country,
    COUNT(*) AS event_count
  FROM
    earliest_events
  GROUP BY
    country
  ORDER BY
    event_count DESC
  LIMIT 3
)

-- Final Query
SELECT
  earliest.country,
  earliest.event_name,
  COUNT(*) AS event_count
FROM
  earliest_events earliest
JOIN
  top_countries top
ON
  earliest.country = top.country
GROUP BY
  earliest.country, earliest.event_name
ORDER BY
  earliest.country, event_count DESC;`,
            breakdown: [
              {
                title: 'top_countries CTE',
                description: 'Identifies the top 3 countries based on the number of events using COUNT(*), GROUP BY country, ORDER BY event_count DESC, and LIMIT 3.',
                color: 'orange'
              },
              {
                title: 'JOIN Operation',
                description: 'Joins earliest_events with top_countries to filter events for only the top 3 countries, enabling focused analysis on high-traffic regions.',
                color: 'red'
              },
              {
                title: 'Event Aggregation',
                description: 'Groups results by country and event_name to count events per funnel stage, ordered by country and event_count for clear funnel visualization.',
                color: 'indigo'
              }
            ]
          }
        ]
      }
    }
  },
  {
    id: 'rfm-analysis',
    title: 'RFM Analysis and Customer Segmentation Dashboard',
    description: 'Conducted comprehensive RFM (Recency, Frequency, Monetary) analysis using SQL on customer transaction data from December 2010 to December 2011. Segmented customers into actionable categories and created Power BI dashboard for strategic marketing insights.',
    impact: 'Enabled targeted marketing strategies and improved customer retention',
    tools: ['SQL', 'Google BigQuery', 'Power BI', 'Customer Segmentation'],
    icon: Users,
    color: 'blue',
    links: {
      demo: '#',
      github: '#',
      case: '#'
    },
    details: {
      objective: 'Conduct an RFM (Recency, Frequency, Monetary) analysis using SQL on the "rfm" table from the "turing_data_analytics" database in BigQuery. The analysis focused on a one-year period from December 1, 2010, to December 1, 2011, to understand customer behavior and identify key customer segments for targeted marketing strategies.',
      methodology: 'Data selection filtering transactions between December 1, 2010, and December 1, 2011. RFM calculation using recency (days since last purchase), frequency (number of purchases), and monetary value (total amount spent). RFM scoring using BigQuery\'s APPROX_QUANTILES function with quartile-based scoring (1-4). Customer segmentation based on RFM scores into categories like Champions, Loyal Customers, Lost Customers, etc. Dashboard visualization using Power BI.',
      outcome: 'Successfully segmented customers into actionable categories: Best Customers showed high recency, frequency, and monetary values ideal for retention strategies. Loyal Customers were frequent buyers with lower monetary value indicating upselling potential. Big Spenders had high monetary value but less frequent purchases suggesting targeted campaigns. Lost Customers required re-engagement strategies. This provided actionable insights to the marketing team on customer segment focus, driving retention and increased revenue.',
      sqlImplementation: {
        sections: [
          {
            title: 'FREQUENCY AND MONETARY CALCULATION',
            description: 'Calculate the frequency (number of distinct invoices) and monetary value (total revenue) for each customer, and determine the last purchase date.',
            query: `WITH freqmon AS (
  SELECT
    customerid,
    MAX(invoicedate) AS last_purchase_date,
    COUNT(DISTINCT(invoiceno)) AS frequency,
    SUM(quantity * unitprice) AS monetary
  FROM
    tc-da-1.turing_data_analytics.rfm
  WHERE
    invoicedate BETWEEN '2010-12-01' AND '2011-12-01'
    AND quantity > 0
    AND unitprice > 0
  GROUP BY
    ALL
)`,
            breakdown: [
              {
                title: 'Data Filtering',
                description: 'Filters transactions between December 1, 2010, and December 1, 2011, ensuring only valid transactions with positive quantity and unit price.',
                color: 'blue'
              },
              {
                title: 'Frequency Calculation',
                description: 'Uses COUNT(DISTINCT(invoiceno)) to calculate the number of unique purchases per customer, representing purchase frequency.',
                color: 'green'
              },
              {
                title: 'Monetary Calculation',
                description: 'Calculates total revenue per customer using SUM(quantity * unitprice) and captures the last purchase date with MAX(invoicedate).',
                color: 'purple'
              }
            ]
          },
          {
            title: 'RECENCY CALCULATION',
            description: 'Calculate the recency, i.e., the number of days since the last purchase as of the reference date (December 1, 2011).',
            query: `, recent AS (
  SELECT *,
    DATE_DIFF(reference_date, last_purchase_date, DAY) AS recency
  FROM (
          SELECT *,
            DATE_ADD(MAX(last_purchase_date) OVER (), INTERVAL 1 DAY) AS reference_date
          FROM freqmon
  )
)`,
            breakdown: [
              {
                title: 'Reference Date Calculation',
                description: 'Creates a reference date as one day after the most recent last_purchase_date using DATE_ADD and window function MAX() OVER().',
                color: 'orange'
              },
              {
                title: 'Recency Calculation',
                description: 'Uses DATE_DIFF to calculate the number of days between the reference date and each customer\'s last purchase date.',
                color: 'red'
              },
              {
                title: 'Window Function Usage',
                description: 'Employs window function to ensure all customers use the same reference date for consistent recency calculations.',
                color: 'indigo'
              }
            ]
          },
          {
            title: 'QUANTILES CALCULATION',
            description: 'Calculate the quartiles (25%, 50%, 75%) for the recency, frequency, and monetary values using the APPROX_QUANTILES function.',
            query: `, quantiles AS (
  SELECT
    APPROX_QUANTILES(freqmon.monetary, 4)[OFFSET(1)] AS m25,
    APPROX_QUANTILES(freqmon.monetary, 4)[OFFSET(2)] AS m50,
    APPROX_QUANTILES(freqmon.monetary, 4)[OFFSET(3)] AS m75,
    APPROX_QUANTILES(freqmon.frequency, 4)[OFFSET(1)] AS f25,
    APPROX_QUANTILES(freqmon.frequency, 4)[OFFSET(2)] AS f50,
    APPROX_QUANTILES(freqmon.frequency, 4)[OFFSET(3)] AS f75,
    APPROX_QUANTILES(recent.recency, 4)[OFFSET(1)] AS r25,
    APPROX_QUANTILES(recent.recency, 4)[OFFSET(2)] AS r50,
    APPROX_QUANTILES(recent.recency, 4)[OFFSET(3)] AS r75
  FROM
    freqmon
  JOIN
    recent
  USING
    (customerid)
)`,
            breakdown: [
              {
                title: 'APPROX_QUANTILES Function',
                description: 'Uses BigQuery\'s APPROX_QUANTILES function to calculate quartiles (25%, 50%, 75%) for monetary, frequency, and recency values.',
                color: 'blue'
              },
              {
                title: 'Quartile Extraction',
                description: 'Extracts specific quartiles using OFFSET(1), OFFSET(2), and OFFSET(3) to get 25th, 50th, and 75th percentiles respectively.',
                color: 'green'
              },
              {
                title: 'Cross-Metric Analysis',
                description: 'Calculates quartiles for all three RFM dimensions (Recency, Frequency, Monetary) to enable consistent scoring across metrics.',
                color: 'purple'
              }
            ]
          },
          {
            title: 'RFM SCORING AND SEGMENTATION',
            description: 'Assign RFM scores (1-4) based on quartiles and segment customers into actionable categories like Champions, Loyal Customers, Lost, etc.',
            query: `, rfm_scores AS (
  SELECT
    customerid,
    recent.recency,
    freqmon.frequency,
    freqmon.monetary,
    CASE
      WHEN recent.recency <= (SELECT r25 FROM quantiles) THEN 4
      WHEN recent.recency <= (SELECT r50 FROM quantiles) THEN 3
      WHEN recent.recency <= (SELECT r75 FROM quantiles) THEN 2
      ELSE 1
    END AS R_score,
   CASE
      WHEN freqmon.frequency <= (SELECT f25 FROM quantiles) THEN 1
      WHEN freqmon.frequency <= (SELECT f50 FROM quantiles) THEN 2
      WHEN freqmon.frequency <= (SELECT f75 FROM quantiles) THEN 3
      ELSE 4
    END AS F_score,
    CASE
      WHEN freqmon.monetary <= (SELECT m25 FROM quantiles) THEN 1
      WHEN freqmon.monetary <= (SELECT m50 FROM quantiles) THEN 2
      WHEN freqmon.monetary <= (SELECT m75 FROM quantiles) THEN 3
      ELSE 4
    END AS M_score,
    CAST(ROUND((
    CASE
      WHEN freqmon.frequency <= (SELECT f25 FROM quantiles) THEN 1
      WHEN freqmon.frequency <= (SELECT f50 FROM quantiles) THEN 2
      WHEN freqmon.frequency <= (SELECT f75 FROM quantiles) THEN 3
      ELSE 4
    END +
    CASE
      WHEN freqmon.monetary <= (SELECT m25 FROM quantiles) THEN 1
      WHEN freqmon.monetary <= (SELECT m50 FROM quantiles) THEN 2
      WHEN freqmon.monetary <= (SELECT m75 FROM quantiles) THEN 3
      ELSE 4
    END
    ) / 2, 0) AS INT64) AS FM_score
  FROM
    freqmon
  JOIN
    recent
  USING
    (customerid)
)

SELECT
  customerid,
  recency,
  frequency,
  monetary,
  R_score,
  F_score,
  M_score,
  FM_score,
  CONCAT(CAST(R_score AS STRING), CAST(F_score AS STRING), CAST(M_score AS STRING)) AS RFM_Score,
  CASE
    WHEN (R_score = 4 AND FM_score = 4) THEN 'Champions'
    WHEN (R_score = 4 AND FM_score = 3) OR (R_score = 3 AND FM_score = 4) THEN 'Loyal Customers'
    WHEN (R_score = 4 AND FM_score = 2) OR (R_score = 3 AND FM_score = 3) OR (R_score = 2 AND FM_score = 4) THEN 'Potential Loyalists'
    WHEN R_score = 4 AND FM_score = 1 THEN 'Recent Customers'
    WHEN (R_score = 3 AND FM_score = 2) OR (R_score = 2 AND FM_score = 3) THEN 'Promising'
    WHEN (R_score = 3 AND FM_score = 1) OR (R_score = 2 AND FM_score = 2) THEN 'Customers Needing Attention'
    WHEN (R_score = 2 AND FM_score = 1) THEN 'About to Sleep'
    WHEN (R_score = 1 AND FM_score = 4) THEN "Can't Lose Them"
    WHEN (R_score = 1 AND FM_score = 3) THEN 'At Risk'
    WHEN R_score = 1 AND FM_score = 1 THEN 'Lost'
    WHEN (R_score = 1 AND FM_score = 2) THEN 'Hibernating'
  END AS rfm_segment
FROM
  rfm_scores
ORDER BY
  customerid`,
            breakdown: [
              {
                title: 'Quartile-Based Scoring',
                description: 'Assigns scores 1-4 based on quartile thresholds, with higher scores for better performance (recent purchases, high frequency, high monetary value).',
                color: 'orange'
              },
              {
                title: 'FM Score Calculation',
                description: 'Creates a combined Frequency-Monetary score by averaging F and M scores, providing a simplified metric for customer value assessment.',
                color: 'red'
              },
              {
                title: 'Customer Segmentation Logic',
                description: 'Segments customers into 11 distinct categories based on RFM score combinations, enabling targeted marketing strategies for each segment type.',
                color: 'indigo'
              }
            ]
          }
        ]
      }
    }
  },
  {
    id: 'subscription-retention',
    title: 'Subscription Retention Analysis',
    description: 'Built comprehensive weekly retention cohort analysis tracking subscriber behavior over 6-week periods. Analyzed subscription data from Nov 2020 to Jan 2021, identifying early churn patterns and retention trends that enabled proactive subscriber management strategies.',
    impact: 'Enabled early churn detection and retention optimization',
    tools: ['SQL', 'Google BigQuery', 'Cohort Analysis'],
    icon: Users,
    color: 'blue',
    links: {
      demo: '#',
      github: '#',
      case: '#'
    },
    details: {
      objective: 'Provide detailed insights into subscription churn by analyzing weekly retention cohorts. The goal is to identify how many subscribers start their subscriptions each week and track how many remain active over the following six weeks. This analysis aims to uncover short-term retention trends, which can help identify early signs of churn and improve subscription strategies.',
      methodology: 'Generated weekly cohorts using GENERATE_DATE_ARRAY, identified start subscriptions with INNER JOIN on date ranges, calculated weekly retention using CROSS JOIN with GENERATE_ARRAY(0, 6), and computed retention rates with conditional counting for active subscribers.',
      outcome: 'Clear view of weekly retention trends for data-driven subscription management. The resulting analysis offers a comprehensive view of weekly retention trends, highlighting how subscriber activity changes within the first six weeks of their subscription.',
      visuals: {
        description: 'From the heatmap, the following was observed:',
        findings: [
          'The churn rate experienced a significant spike during the festive period, followed by a notable decline in the subsequent months.',
          'The December 20, 2020 cohort achieved the lowest churn rate!'
        ]
      }
    }
  },
  {
    id: 'xyz-media-analysis',
    title: 'XYZ Media Performance & Financial Viability Dashboard',
    description: 'Developed a comprehensive performance and financial viability dashboard for the "XYZ Media" marketing channel. Assessed channel effectiveness, measured profitability against unique cost structure (10% commission + $3000 monthly fee), and benchmarked against other marketing channels.',
    impact: 'Enabled data-driven marketing budget allocation decisions',
    tools: ['SQL', 'Google BigQuery', 'Power BI', 'Marketing Analytics'],
    icon: DollarSign,
    color: 'green',
    links: {
      demo: '#',
      github: '#',
      case: '#'
    },
    details: {
      objective: 'Develop a comprehensive performance and financial viability dashboard for the "XYZ Media" marketing channel. This initiative was undertaken to assess the channel\'s effectiveness, measure its profitability against its unique cost structure (10% commission per order + $3000 flat monthly platform fee), and determine whether continued investment is warranted.',
      methodology: 'Data Integration & Preparation from two BigQuery datasets. Metric Calculation & Cost Attribution for performance metrics (Total Orders, Customers, Revenue) and cost attribution with unique XYZ Media structure. Channel Viability Analysis comparing CAC and ROAS across channels. Dashboard Presentation using two-page Power BI dashboard for stakeholder insights.',
      outcome: 'The comprehensive analysis was visualized using a two-page Power BI dashboard designed for clarity and actionable insights for marketing stakeholders. XYZ Media demonstrated overall profitability with competitive CAC when benchmarked against other channels. Analysis revealed top-performing creators and optimization opportunities for scaling successful partnerships.',
      dashboardImages: {
        page1: '/unnamed (1).png',
        page2: '/unnamed.png',
        description: 'Two-page Power BI dashboard showing cross-channel performance summary and detailed XYZ Media sales breakdown with creator insights.'
      }
    }
  },
  {
    id: 'ab-testing-analysis',
    title: 'Fast Food Marketing Campaign A/B Test',
    description: 'Conducted comprehensive A/B testing analysis for a fast food chain to determine which of three marketing promotions was most effective in driving sales. Used statistical hypothesis testing with 99% confidence level to provide data-driven recommendations.',
    impact: 'Identified most effective promotion strategy',
    tools: ['SQL', 'Statistical Analysis', 'A/B Testing', 'Hypothesis Testing'],
    icon: TestTube,
    color: 'purple',
    links: {
      demo: '#',
      github: '#',
      case: 'https://docs.google.com/document/d/1Tq8iOIO0v4Mu_OiIPXJx51D6Hp0Hh_Ji2SMzY6d1qjU/edit?tab=t.0'
    },
    details: {
      objective: 'The main goal of this A/B test was to test which of the promotions (1, 2, or 3) was the most successful and improved sales. The fast food chain decided between three possible marketing campaigns for promoting a new product, to see which promotion had the greatest effect.',
      methodology: 'Used statistical hypothesis testing with 99% confidence level (α = 0.01). Performed pairwise comparisons using multiple two-sample t-tests between promotions. Analyzed target metric of sales_in_thousands across different locations for each promotion.',
      outcome: 'Promotion 1 significantly outperformed Promotion 2, while there was no significant difference between Promotion 1 and Promotion 3. Decision was to implement either Promotion 1 or Promotion 3 based on additional considerations, with Promotion 1 showing more consistent superiority in comparison tests.'
    }
  },
  {
    id: 'adventureworks-dashboard',
    title: 'AdventureWorks Sales Dashboard',
    description: 'Designed and built an interactive sales dashboard for the AdventureWorks dataset, leveraging SQL to query data from Google BigQuery and connect it seamlessly to Power BI. The dashboard provides comprehensive sales performance insights and business intelligence.',
    impact: 'Enhanced sales performance monitoring and decision-making',
    tools: ['SQL', 'Google BigQuery', 'Power BI', 'Data Visualization'],
    icon: BarChart3,
    color: 'indigo',
    links: {
      demo: '#',
      github: '#',
      case: '#'
    },
    details: {
      objective: 'Design and build an interactive sales dashboard for the AdventureWorks dataset, demonstrating end-to-end data handling from query optimization and schema understanding in BigQuery, to intuitive visual storytelling in Power BI.',
      methodology: 'Data extraction and transformation using SQL queries in Google BigQuery. Dashboard design focusing on key business metrics including total sales performance, top-selling products & categories, sales trends over time, geographical sales distribution, and customer segmentation & purchase patterns.',
      outcome: 'The project demonstrates end-to-end data handling — from query optimization and schema understanding in BigQuery, to intuitive visual storytelling in Power BI. This dashboard was built to reflect real-world business KPIs and is optimized for both executive overview and detailed drill-down analysis.',
      dashboardImages: {
        page1: '/Screenshot 2025-03-03 233829.png',
        page2: '/Screenshot 2025-03-03 233927.png',
        description: 'Two-page Power BI dashboard featuring comprehensive sales analysis with overview metrics, geographical distribution, and detailed product analysis.'
      }
    }
  }
];