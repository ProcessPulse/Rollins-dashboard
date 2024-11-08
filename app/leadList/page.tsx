import React from 'react';
import Layout from '../layout';

// LEAD LIST
const Page1: React.FC = () => ( 
  <Layout>
    <div style={{ width: '100%', height: 'calc(100vh - 50px)', overflow: 'hidden' }}>
    <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/appnY0OGs2OrZXWmy/shrKTCAaCBjuvQVDW"
        width="100%"
        height="100%"
        style={{ background: 'transparent', border: '1px solid #ccc' }}
        title="Airtable Interface"
      />
    </div>
  </Layout>
);

export default Page1;