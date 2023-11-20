from p5 import *


def preload():
  global data;
  print("preload");

  data = loadTable(
    "https://ixvoxijzoibrbmkwbnmk.supabase.co/storage/v1/object/public/Content/Data/data.csv?t=2023-11-04T08%3A20%3A24.289Z",
    "csv",
    "Header"
  );
  print("preload >", data.rows);
  print("preload >", data.getRowCount());


def setup():
  global data;
  print("setup");
  print("setup >", data.rows);
  print("setup >", data.getRowCount());

