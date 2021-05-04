class AlgoliaSearch{
  constructor(){
    this.client = algoliasearch('HSITM1M4MJ', '7663b5d9eb94f132c2e82f71827eea2b');
    this.index = this.client.initIndex('eleventy_test');
    this.input = document.querySelector('.alg-search');
    this.resultsList = document.querySelector('.results');
    this.resultsContainer = document.querySelector('.algolia-results-container');
    this.init();
  }

  init(){
    this.input.addEventListener('input', e => {
      if(!e.target.value == ''){
        this.doSearch(e.target.value);    
      }else{
        this.resultsContainer.classList.remove('show')
      }
    });
  }

  async doSearch(exp){
    this.resultsList.innerHTML = '';
    let list = '';
    this.index.search(exp).then(({ hits }) => {
      if(hits == false){
        this.resultsContainer.classList.remove('show')
      }else{
        this.resultsContainer.classList.add('show')
      }
      hits.forEach( hit => {
        const highlights = hit._highlightResult;
        list+=`<div><a href="${hit.url}">${highlights.title.value}</a></div>`
      });
      this.resultsList.innerHTML = list;
    });
  }
}