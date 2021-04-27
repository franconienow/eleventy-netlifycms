class AlgoliaSearch{
  constructor(){
    this.client = algoliasearch('HSITM1M4MJ', '7663b5d9eb94f132c2e82f71827eea2b');
    this.index = this.client.initIndex('eleventy_test');
    this.input = document.querySelector('.alg-search');
    this.resultsList = document.querySelector('.results');
    this.init();
  }

  init(){
    this.input.addEventListener('keyup', e => {
      this.doSearch(e.target.value);
    });
  }

  async doSearch(exp){
    let list = '';
    this.index.search(exp).then(({ hits }) => {
      console.log(hits)
      hits.forEach( hit => {
        list+=`<li><a href="${hit.url}">${hit.title}</a></li>`
      });
      this.resultsList.innerHTML = list;
    });
  }
}