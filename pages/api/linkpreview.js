import { getLinkPreview, getPreviewFromContent } from "link-preview-js";

export default async (req, res) => {
  if (req.query.url) {
    const data = await getLinkPreview(req.query.url, {
      headers: {
        "user-agent": "googlebot",

        "Access-Control-Allow-Origin": "*",
      },
    });
    res.send(data);
  }
  else{
      res.send("no")
  }
  
  
};
