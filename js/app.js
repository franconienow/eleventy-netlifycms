// const client = algoliasearch("HSITM1M4MJ", "7663b5d9eb94f132c2e82f71827eea2b");
// const index = client.initIndex("eleventy_test");

// const input = document.querySelector(".alg-search");
// const resultsList = document.querySelector(".results");

// const doSearch = async (exp) => {
//   let list = "";
//   index.search(exp).then(({ hits }) => {
//     console.log(hits);
//     hits.forEach((hit) => {
//       list += `<li><a href="${hit.url}">${hit.title}</a></li>`;
//     });
//     resultsList.innerHTML = list;
//   });
// };

// input.addEventListener("keyup", (e) => {
//   doSearch(e.target.value);
// });

if (document.querySelector(".alg-search")){
  new AlgoliaSearch();
}
