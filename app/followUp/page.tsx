import React from "react";
import Layout from "../layout";

// FOLLOW UO SCSHEDULE
const Page4: React.FC = () => (
  <Layout>
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 50px)",
        overflow: "hidden",
      }}
    >
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/appnY0OGs2OrZXWmy/shrEeUhHt2UDfOThA"
        width="100%"
        height="100%"
        style={{ background: "transparent", border: "1px solid #ccc" }}
        title="Fourth Airtable Interface"
      />
    </div>
  </Layout>
);

export default Page4;
