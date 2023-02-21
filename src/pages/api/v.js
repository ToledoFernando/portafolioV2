export default function (req, res) {
  const variables = {
    service: process.env.SERVICE,
    template: process.env.TEMPLATEID,
    publicKey: process.env.PUBLIC_KEY,
  };
  res.json(variables);
}
