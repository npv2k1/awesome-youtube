import Head from "next/head";
import Card from "../components/Card";
import Section from "../components/Section";
// import SideBar from "../components/SideBar"
import SideBar from "../components/SideBar";

import channels from "../crawls/channels.json";

export default function Home() {
  return (
    <div className="flex flex-col h-screen max-h-screen bg-gray-200 overflow-hidden">
      <Head>
        <title>Awesome Youtube</title>

        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="npv2k1"
          data-description="Support me on Buy me a coffee!"
          data-message=""
          data-color="#FFDD00"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
      </Head>
      <main className="flex flex-1">
        <SideBar />
        <div
          className="flex-1 p-5 h-0 min-h-full overflow-y-auto pb-5"
          style={{ scrollBehavior: "smooth" }}
        >
          {Object.keys(channels).map((e) => (
            <Section
              key={channels[e].id}
              id={channels[e].id}
              name={e}
              list={channels[e].list}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
