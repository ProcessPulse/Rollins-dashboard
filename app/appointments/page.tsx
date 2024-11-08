import React from "react";
import Layout from "../layout";

// APPOINTMETNS
const Page3: React.FC = () => (
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
        src="https://airtable.com/embed/appnY0OGs2OrZXWmy/shrhxoCZyHpq9w10r"
        width="100%"
        height="100%"
        style={{ background: "transparent", border: "1px solid #ccc" }}
        title="Third Airtable Interface"
      />
    </div>
  </Layout>
);

export default Page3;
