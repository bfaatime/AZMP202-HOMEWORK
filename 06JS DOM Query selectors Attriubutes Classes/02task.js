const styles = `
  .container { max-width: 960px; margin: 0 auto; }
  .banner { width: 100%; height: 360px; background-color: #333; color: white; display: flex; justify-content: center; align-items: center; font-size: 24px; }
  .row { display: flex; justify-content: space-between; margin-top: 20px; }
  .col { width: 290px; background-color: #333; color: white; text-align: center; padding: 20px; border-radius: 4px; }
  .col-title { font-style: italic; font-size: 18px; }
  .col-text { color: #777; font-size: 14px; margin: 10px 0; }
  .read-more { color: orange; font-size: 12px; font-weight: bold; text-decoration: none; }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

const container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

const banner = document.createElement("div");
banner.className = "banner";
banner.innerText = "960 x 360px";
container.appendChild(banner);

const row = document.createElement("div");
row.className = "row";
container.appendChild(row);

for (let i = 0; i < 3; i++) {
  const col = document.createElement("div");
  col.className = "col";

  const colImage = document.createElement("div");
  colImage.innerText = "290 x 180px";
  col.appendChild(colImage);

  const colTitle = document.createElement("div");
  colTitle.className = "col-title";
  colTitle.innerText = "Indonecctetus facilis";
  col.appendChild(colTitle);

  const colText = document.createElement("p");
  colText.className = "col-text";
  colText.innerText =
    "Nullam ac dui ipsum consque lobortis non euisque morbi penna dapibus urna.";
  col.appendChild(colText);

  const readMore = document.createElement("a");
  readMore.className = "read-more";
  readMore.href = "#";
  readMore.innerText = "Read More »";
  col.appendChild(readMore);

  row.appendChild(col);
}
