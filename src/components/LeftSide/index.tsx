import { Row, Statistic, Card, Divider, List, Col } from 'antd';
import cls from 'classnames';
import styles from './styles.module.css';
import { CardRanking } from '../CardRanking';

export const LeftSide = () => {
  const listData = [];
  for (let i = 0; i < 5; i += 1) {
    listData.push({
      rank: i,
      href: 'https://ant.design',
      title: `Death Note ${i}`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 'TV, 37 eps, scored 8.63 2,671,807 members',
    });
  }

  return (
    <div className={cls(styles.leftSide, 'mt-1')}>
      <Row>
        <Col span={12}>
          <Statistic title='Recent Activities' value={112893} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Statistic title='Account Balance (CNY)' value={112893} precision={2} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Statistic title='Active Users' value={112893} loading />
        </Col>
      </Row>
      <Divider />
      <Card className={styles.topMovies} title='Top Movies'>
        <List
          itemLayout='vertical'
          size='large'
          dataSource={listData}
          renderItem={(item) => (
            <CardRanking
              title={item.title}
              description={item.description}
              href={item.href}
              rank={item.rank}
            />
          )}
        />
      </Card>
    </div>
  );
};
