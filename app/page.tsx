import React from 'react';
import Layout from './layout';

const HomePage: React.FC = () => (
  <Layout>
    <div className="full-screen-embed">
      <iframe
        className="responsive-iframe"
        src="https://airtable.com/embed/appnY0OGs2OrZXWmy/shrJXqvSH72CI9frL"
        style={{ width: '100%', height: '100%', background: 'transparent', border: 'none' }}
        title="Overview"
      />
    </div>
  </Layout>
);

export default HomePage;