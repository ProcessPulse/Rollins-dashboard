import React from "react";
import Layout from '../layout';

// CALL LOGS
const Page2: React.FC = () => (
  <Layout>
    <div className="full-screen-embed">
      <iframe
        className="responsive-iframe"
        src="https://airtable.com/embed/appnY0OGs2OrZXWmy/shrP2sJTH7jKFQZC8?view=mobile"
        width="100%"
        height="100%"
        style={{ background: "transparent", border: "1px solid #ccc" }}
        title="Second Airtable Interface"
      />
    </div>
  </Layout>
);

export default Page2;
