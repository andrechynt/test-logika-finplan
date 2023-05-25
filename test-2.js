const searchText = (text) => {
  const arr = [];
  const query1 = "sang gajah";
  const query2 = "serigala";
  const query3 = "harimau";
  let textLower = text.toLowerCase();
  let i = true;

  while (i) {
    if (textLower.includes(query1)) { // find text with query
      const result = textLower.match(query1); // get text with matching query
      arr.push(result[0]); // save text in array
      textLower = textLower.replace(query1, ""); // update text with delete the found text
    } else if (textLower.includes(query2)) {
      const result = textLower.match(query2);
      arr.push(result[0]);
      textLower = textLower.replace(query2, "");
    } else if (textLower.includes(query3)) {
      const result = textLower.match(query3);
      arr.push(result[0]);
      textLower = textLower.replace(query3, "");
    } else {
      i = false;
    }
  }

  return arr;
};

const text =
  "Berikut adalah kisah sang gajah. Sang gajah memiliki teman serigala bernama DoeSang. Gajah sering dibela oleh serigala ketika harimau mendekati gajah";

console.log(searchText(text).join(" - "));
