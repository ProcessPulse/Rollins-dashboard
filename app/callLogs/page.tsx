import React from "react";
import Layout from '../layout';

// CALL LOGS
const Page2: React.FC = () => (
  <Layout>
    <div className="full-screen-embed">
      <iframe
        className="responsive-iframe"
        src="https://airtable.com/embed/appnY0OGs2OrZXWmy/shrP2sJTH7jKFQZC8?view=mobile"
        title="Call Logs"
      />
    </div>
  </Layout>
);

export default Page2;
