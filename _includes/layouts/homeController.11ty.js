class HomeController {
  data() {
    return {  
      name: "Franco",
      layout: 'layouts/base.njk'
    };
  }

  async getCta(cta){
    if(cta){
      const Cta = await import('../sections/cta/cta.11ty.js');
      switch (cta.variant) {
        case 1:
          return Cta.cta1(cta)
        case 2:
          return Cta.cta2(cta)
        default:
          return Cta.cta1(cta)
      }
    }
  }

  async render({ title, cta }) {
    return `
      <main>
        <section class="py-5">
          <div class="container">
            <div class="row">
              <div class="col-6 mx-auto">
                <h1>${title}</h1>
              </div>
            </div>
          </div>
        </section>
        ${await this.getCta(cta)}
      </main>
    `;
  }
}
module.exports = HomeController;