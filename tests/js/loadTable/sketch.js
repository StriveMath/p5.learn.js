let data;
function preload() {
  console.log("preload");

  data = loadTable(
    "https://ixvoxijzoibrbmkwbnmk.supabase.co/storage/v1/object/public/Content/Data/data.csv?t=2023-11-04T08%3A20%3A24.289Z",
    "csv",
    "Header"
  );
  console.log("preload >", data.rows);
  console.log("preload >", data.getRowCount());
}

function setup() {
  console.log("setup");
  console.log("setup >", data.rows);
  console.log("setup >", data.getRowCount());
}

function draw() {}
