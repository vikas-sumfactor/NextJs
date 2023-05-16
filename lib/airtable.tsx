const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_KEY
);

const table = base("coffeestores");
const getMinifiedRecord = (record:any) => {
  return {
    recordId: record.id,
    ...record.fields,
  };
};

const getMinifiedRecords = (records:any) => {
  return records.map((record:any) => getMinifiedRecord(record));
};

export { table, getMinifiedRecords };